import { Module, OnModuleInit } from "@nestjs/common";
import { io, Socket } from 'socket.io-client';

@Module({
    providers: [SocketModule]
})
export class SocketModule implements OnModuleInit {
    socketClient: Socket;

    constructor() {
        this.socketClient = io('http://localhost:3000')
    }
    onModuleInit() {
        this.socketClient.on('connect', () => {
            console.log('connected to server');
        })
    }
}