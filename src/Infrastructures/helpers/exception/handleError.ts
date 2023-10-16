import { Response } from "express";

const handleError = (res: Response, error: unknown): Response => {
  if (error instanceof Error) {
    return res.status(500).json({
      code: 500,
      status: "failed",
      message: "Internal Server Error",
      error: error.message,
    });
  }

  return res.status(500).json({
    code: 500,
    status: "failed",
    message: "Internal Server Error",
    error: "Error occurred",
  });
};

export default handleError;
