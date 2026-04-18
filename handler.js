const permissions = require('./middleware/permissions');

// Command definitions with required levels
const commandLevels = {
    // Super Admin only
    'broadcast': 'superadmin',
    'setadmin': 'superadmin',
    'globalban': 'superadmin',
    
    // Admin only
    'tagall': 'admin',
    'mute': 'admin',
    'unmute': 'admin',
    'kick': 'admin',
    'promote': 'admin',
    'demote': 'admin',
    'setdesc': 'admin',
    'setsubject': 'admin',
    'antilink': 'admin',
    
    // Moderator and above
    'warn': 'moderator',
    'unwarn': 'moderator',
    'delete': 'moderator',
    'slowmode': 'moderator',
    
    // Everyone (if public mode enabled)
    'help': 'member',
    'rules': 'member',
    'profile': 'member'
};

async function handleCommand(sock, msg, command, args, groupId, senderId) {
    const requiredLevel = commandLevels[command] || 'superadmin';
    
    // Check permission
    if (!permissions.canExecuteCommand(senderId, groupId, requiredLevel)) {
        await sock.sendMessage(groupId, { 
            text: `❌ *Access Denied*\n\n` +
                  `Command: .${command}\n` +
                  `Required: ${requiredLevel}\n` +
                  `Your level: ${permissions.getPermissionLevel(senderId, groupId)}` 
        });
        return false;
    }

    // Execute command...
    return true;
}
