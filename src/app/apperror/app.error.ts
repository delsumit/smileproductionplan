import { ErrorHandler } from "@angular/core";

export class AppError implements ErrorHandler {
 
    handleError(error: any): void {
        throw new Error("Method not implemented.");
    }
}