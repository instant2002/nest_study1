import * as Joi from '@hapi/joi';
import * as _ from 'lodash';

import { Config } from '../model';
import { Service } from '../../tokens';


export const configProvider = {
  provide: Service.CONFIG,
  useFactory: (): Config => {
    const { env } = process;
    const validationSchema = Joi.object().unknown().keys({
      API_PORT: Joi.string().required(),
      API_PREFIX: Joi.string().required(),
      SWAGGER_ENABLE: Joi.string().required(),
      JWT_SECRET: Joi.string().required(),
    });

    const result = validationSchema.validate(env);

    if (result.error) {
      throw new Error(`Configuration not valid: ${result.error.message}`);
    }
    return {
      API_PORT: _.toNumber(env.API_PORT),
      API_PREFIX: `${env.API_PREFIX}`,
      SWAGGER_ENABLE: _.toNumber(env.SWAGGER_ENABLE),
      JWT_SECRET: `${env.JWT_SECRET}`,
    };
  },
};
