module.exports = {
    // Bot identity
    botName: "GroupManager",
    version: "1.0.0",
    
    // Owner (Super Admin)
    owner: {
        name: "JohnBlackPipes",
        number: "27842469788@s.whatsapp.net", // Your WhatsApp ID
        email: "johnblack@jozinites.co.za"
    },
    
    // Group Assignments (Critical for your use case)
    groupAssignments: {
        // Format: groupID: { admin: "number", moderators: ["number1", "number2"] }
        "27842469788@g.us: {
            name: "Jozi Nites Spaza",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: true,
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 300000 // 5 minutes default
            }
        },
        "27842469788@g.us": {
            name: "Game Nite",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Indaba Events",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27840386110@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Thoughts",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["276523715190@s.whatsapp.net","278357490380@s.whatsapp.net" ],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Snap",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["276447705490@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Agony Aunt & Confession",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Podcast",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Writers Blok",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Market",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Sneaky Links",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        },
         "27842469788@g.us": {
            name: "Jozi Nites Academy",
            admin: "27842469788@s.whatsapp.net",
            moderators: ["27842469788@s.whatsapp.net"],
            settings: {
                antiLink: false, // More relaxed
                antiSpam: true,
                welcomeMessage: true,
                muteDuration: 600000 // 10 minutes
            }
        }
    },
    
    // Global settings
    publicMode: false, // Restrict to assigned admins/mods only
    autoRead: true,
    autoTyping: false,
    autoRecord: false,
    
    // Command prefixes
    prefix: ".",
    
    // Features
    features: {
        antiDelete: true,  // Detect deleted messages
        antiViewOnce: true, // Save view-once media
        autoSticker: false, // Convert images to stickers automatically
        levelUp: false // XP system (optional gamification)
    }
};
