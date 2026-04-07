// Real-time data updates handler
const connectedClients = new Set();

export const setupRealtimeHandler = (io, socket) => {
    // Client subscribes to real-time updates
    socket.on('subscribe:users', () => {
        connectedClients.add(socket.id);
        console.log(`📡 Client subscribed to user updates (${connectedClients.size} subscribers)`);
        socket.emit('subscribed', { type: 'users' });
    });

    socket.on('subscribe:posts', () => {
        connectedClients.add(socket.id);
        console.log(`📡 Client subscribed to post updates (${connectedClients.size} subscribers)`);
        socket.emit('subscribed', { type: 'posts' });
    });

    socket.on('disconnect', () => {
        connectedClients.delete(socket.id);
        console.log(`📡 Client unsubscribed from updates (${connectedClients.size} remaining)`);
    });
};

// Broadcast user list updates
export const broadcastUserUpdate = (io, users, action = 'updated') => {
    io.emit('update:users', {
        action: action, // 'created', 'updated', 'deleted', 'updated'
        users: users,
        timestamp: new Date(),
        subscriberCount: connectedClients.size
    });
    console.log(`📤 Broadcasting user ${action} to ${connectedClients.size} subscribers`);
};

// Broadcast post updates
export const broadcastPostUpdate = (io, posts, action = 'updated') => {
    io.emit('update:posts', {
        action: action,
        posts: posts,
        timestamp: new Date(),
        subscriberCount: connectedClients.size
    });
    console.log(`📤 Broadcasting post ${action} to ${connectedClients.size} subscribers`);
};

export const getConnectedClients = () => connectedClients.size;
