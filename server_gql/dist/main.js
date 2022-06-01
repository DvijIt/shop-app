"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = await app.get(config_1.ConfigService);
    const port = config.get('API_PORT');
    await app.listen(port || 3000, () => {
        console.log(`App started on port: ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map