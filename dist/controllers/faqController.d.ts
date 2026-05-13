import { Request, Response } from 'express';
export declare const getFaqs: (req: Request, res: Response) => Promise<void>;
export declare const createFaq: (req: Request, res: Response) => Promise<void>;
export declare const updateFaq: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteFaq: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
