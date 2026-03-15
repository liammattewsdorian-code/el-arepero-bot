require('dotenv').config();

module.exports = {
    // WhatsApp
    whatsapp: {
        number: process.env.WHATSAPP_NUMBER || '18296403859',
        name: process.env.WHATSAPP_NAME || 'Kariña',
        chromePath: process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    },

    // Negocio
    business: {
        name: process.env.BUSINESS_NAME || 'EL AREPERO',
        location: process.env.BUSINESS_LOCATION || 'Uvero Alto Plaza, Punta Cana',
        website: process.env.BUSINESS_WEBSITE || 'https://elarepero.com',
        instagram: process.env.BUSINESS_INSTAGRAM || '@elarepero',
        maps: process.env.GOOGLE_MAPS_EMBED_URL || 'https://maps.app.goo.gl/elarepero',
        review: process.env.GOOGLE_REVIEW_URL || 'https://g.page/r/elarepero/review',
        horario: '24/7',
        telefono: '+1 (829) 640-3859'
    },

    // Precios
    precios: {
        base: 100,
        maxIngredientes: 8,
        moneda: 'RD$',
        ingredientPromedio: 60
    },

    // Configuración
    app: {
        env: process.env.NODE_ENV || 'production',
        port: process.env.PORT || 3000,
        botEnabled: process.env.BOT_ENABLED !== 'false'
    },

    // Analytics
    analytics: {
        enabled: process.env.GOOGLE_ANALYTICS_ID ? true : false,
        gaId: process.env.GOOGLE_ANALYTICS_ID
    }
};
