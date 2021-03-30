export class ResponseModel <T> {
    status: string = "";
    message: string = "";
    // @ts-ignore
    data: T  ;

}