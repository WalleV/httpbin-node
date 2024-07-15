import { Controller, Req, Delete, Get, Patch, Put, Post } from '@nestjs/common';
import { Request } from 'express';


@Controller('/')
export class MethodsController {

    @Get('/get')
    get(@Req() req: Request) {
        const origin = req.headers.origin;
        const headers = req.headers;
        return { origin, headers };
    }

    @Post('/post')
    post() {
        return 'POST';
    }

    @Put('/put')
    put() {
        return 'PUT';
    }

    @Patch('/patch')
    patch() {
        return 'PATCH';
    }

    @Delete('/delete')
    delete() {
        return 'DELETE';
    }
    

}
