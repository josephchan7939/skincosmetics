import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { FastifyReply } from "fastify";



export class AllExceptionFilter implements ExceptionFilter {
  
   catch(exception: any, host: ArgumentsHost) {
     const ctx = host.switchToHttp();
     const response = ctx.getResponse<FastifyReply>();

     
     let errorCode:number = exception instanceof HttpException ?
     exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
     
     let errorMsg:string = exception instanceof HttpException ?
     exception['response']['message'] : exception.message;
     
     //errorMsg = `${exception}`;
 
     
    
    const resBody = {
      code: errorCode,
      message:errorMsg,
    //  (exceptionResponse as HttpExceptionResponse).error ||
    //  (exceptionResponse as HttpExceptionResponse).message ||
    //  exceptionResponse ||
     // 'Something went wrong',
      data:null
    }

     response.status(errorCode).send(resBody);
   }
} 