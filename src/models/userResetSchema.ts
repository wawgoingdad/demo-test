import { z } from 'zod';

export const createUserResetSchema = (t: (key: string) => string) => z.object({
  firstName: z.string().min(1, t("firstNameRequired")),
  lastName: z.string().min(1, t("lastNameRequired"))
});

export type UserReset = z.infer<ReturnType<typeof createUserResetSchema>>;
