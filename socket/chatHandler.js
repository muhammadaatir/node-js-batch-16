// Store active users and their chat history
const activeUsers = new Map();
const chatHistory = [];

export const setupChatHandler = (io, socket) => {
    // User joins chat
    socket.on('user:join', (userData) => {
        const userId = userData.id || socket.id;
        activeUsers.set(socket.id, {
            id: userId,
            name: userData.name,
            socketId: socket.id,
            joinedAt: new Date()
        });

        console.log(`✅ User joined: ${userData.name} (${socket.id})`);

        // Broadcast user joined to all clients
        io.emit('users:updated', Array.from(activeUsers.values()));
        socket.emit('chat:history', chatHistory);
    });

    // Handle incoming messages
    socket.on('message:send', (data) => {
        const user = activeUsers.get(socket.id);
        
        if (!user) {
            socket.emit('error', { message: 'User not found. Please join first.' });
            return;
        }

        const message = {
            id: Date.now(),
            senderId: user.id,
            senderName: user.name,
            text: data.text,
            timestamp: new Date(),
            socketId: socket.id
        };

        chatHistory.push(message);
        
        // Keep only last 100 messages
        if (chatHistory.length > 100) {
            chatHistory.shift();
        }

        console.log(`💬 Message from ${user.name}: ${data.text}`);

        // Broadcast message to all clients
        io.emit('message:received', message);
    });

    // Handle typing status
    socket.on('message:typing', (data) => {
        const user = activeUsers.get(socket.id);
        if (user) {
            socket.broadcast.emit('user:typing', {
                userId: user.id,
                userName: user.name,
                isTyping: data.isTyping
            });
        }
    });

    // User leaves chat
    socket.on('disconnect', () => {
        const user = activeUsers.get(socket.id);
        if (user) {
            activeUsers.delete(socket.id);
            console.log(`❌ User left: ${user.name} (${socket.id})`);
            io.emit('users:updated', Array.from(activeUsers.values()));
        }
    });
};

export const getActiveUsers = () => Array.from(activeUsers.values());
export const getChatHistory = () => chatHistory;
