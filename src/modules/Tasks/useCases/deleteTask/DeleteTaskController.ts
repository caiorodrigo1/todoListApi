import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

class DeleteTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTask = container.resolve(DeleteTaskUseCase);

    await deleteTask.execute({ id });

    return response.status(200).json([]);
  }
}

export { DeleteTaskController };
