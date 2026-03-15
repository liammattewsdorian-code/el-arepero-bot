const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');
const responses = require('./responses');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        ,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// ==========================================
// EVENTOS DEL BOT
// ==========================================

client.on('qr', (qr) => {
    console.log('\n🎯 Escanea este QR con WhatsApp Business:\n');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('\n✅ Bot de El Arepero está listo!\n');
    console.log(`📱 Usando número: ${config.whatsapp.number}`);
    console.log(`🏪 Negocio: ${config.business.name}`);
    console.log(`📍 Ubicación: ${config.business.location}`);
    console.log(`⏰ Horario: ${config.business.horario}\n`);
});

client.on('message', async (message) => {
    try {
        const chat = await message.getChat();
        const contact = await message.getContact();
        const nombre = contact.name || message.from;
        const texto = message.body.trim().toUpperCase();

        console.log(`\n📨 Mensaje de ${nombre}:`);
        console.log(`   "${message.body}"`);

        // Extraer respuesta apropiada
        let respuesta = responses.noEntendio(nombre);

        // Mapeo de comandos
        const comandos = {
            'HOLA': () => responses.bienvenida(nombre),
            'MENÚ': () => responses.menu(),
            'SUGERIDAS': () => responses.sugeridas(),
            'COMBOS': () => responses.combos(),
            'DELIVERY': () => responses.delivery(),
            'UBICACIÓN': () => responses.ubicacion(),
            'UBICACION': () => responses.ubicacion(),
            'HORARIO': () => responses.horario(),
            'PAGOS': () => responses.pagos(),
            'PRECIOS': () => responses.precios(),
            'OFERTA': () => responses.oferta(),
            'VEGETARIANO': () => responses.vegetariano(),
            'SIN GLUTEN': () => responses.sinGluten(),
            'GRACIAS': () => responses.gracias(nombre),
            'AYUDA': () => responses.ayuda(),
        };

        // Buscar comando exacto
        for (const [cmd, fn] of Object.entries(comandos)) {
            if (texto === cmd || texto.includes(cmd)) {
                respuesta = fn();
                break;
            }
        }

        // Enviar respuesta
        if (respuesta) {
            await message.reply(respuesta);
            console.log(`✅ Respuesta enviada a ${nombre}\n`);
        }

    } catch (error) {
        console.error('❌ Error procesando mensaje:', error.message);
    }
});

client.on('disconnected', (reason) => {
    console.log(`\n⚠️ Bot desconectado: ${reason}`);
    process.exit(0);
});

// ==========================================
// INICIAR BOT
// ==========================================

if (config.app.botEnabled) {
    console.log('🥙 El Arepero - Bot WhatsApp iniciando...\n');
    client.initialize();
} else {
    console.log('⚠️ Bot deshabilitado en configuración');
}

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n👋 Cerrando El Arepero Bot...');
    await client.destroy();
    process.exit(0);
});

module.exports = client;
