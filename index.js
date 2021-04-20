const config = require('config');
const defaultConfig = require('./config/default.json');

console.log({
  ENV_FIELD: process.env.ENV_FIELD,
  NESTED_ENV_FIELD: process.env.NESTED_ENV_FIELD,
  INVALID_ENV_FIELD: process.env.INVALID_ENV_FIELD,
  fieldFromDefaultConfig: defaultConfig.fieldFromDefaultConfig,
});

if (config.has('fieldFromEnvFile')) {
  console.log({ fieldFromEnvFile: config.get('fieldFromEnvFile') });
} else {
  console.log('fieldFromEnvFile not found in config');
}

if (config.has('nested.nestedFieldFromEnvFile')) {
  console.log({
    'nested.nestedFieldFromEnvFile': config.get(
      'nested.nestedFieldFromEnvFile',
    ),
  });
} else {
  console.log('nested.nestedFieldFromEnvFile not found in config');
}

if (config.has('invalidFieldFromEnvFile')) {
  console.log({
    invalidFieldFromEnvFile: config.get('invalidFieldFromEnvFile'),
  });
} else {
  console.log('invalidFieldFromEnvFile not found in config');
}

if (config.has('fieldFromDefaultConfig')) {
  console.log({ fieldFromDefaultConfig: config.get('fieldFromDefaultConfig') });
} else {
  console.log('fieldFromDefaultConfig not found in config');
}
