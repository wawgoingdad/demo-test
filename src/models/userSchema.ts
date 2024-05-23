import { z } from 'zod';
import i18next from 'i18next';

export const createUserSchema = (t: typeof i18next.t) => z.object({
  email: z.string()
    .nonempty({ message: t('emailRequired') })
    .email({ message: t('invalidEmail') }),
  password: z.string()
    .nonempty({ message: t('passwordRequired') })
    .min(8, { message: t('passwordLength') })
});

export type User = z.infer<ReturnType<typeof createUserSchema>>;
