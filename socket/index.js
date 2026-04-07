import { setupChatHandler } from './chatHandler.js';
import { setupRealtimeHandler } from './realtimeHandler.js';

export const initializeSocket = (io) => {
    io.on('connection', (socket) => {
        console.log(`👤 New connection: ${socket.id}`);

        // Setup chat features
        setupChatHandler(io, socket);

        // Setup real-time updates
        setupRealtimeHandler(io, socket);

        // Handle general errors
        socket.on('error', (error) => {
            console.error(`Error from ${socket.id}:`, error);
        });
    });
};

export { broadcastUserUpdate, broadcastPostUpdate, getConnectedClients } from './realtimeHandler.js';
export { getActiveUsers, getChatHistory } from './chatHandler.js';
