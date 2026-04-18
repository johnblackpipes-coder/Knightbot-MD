const config = require('../config');

class PermissionManager {
    constructor() {
        this.superAdmin = config.owner.number;
        this.groups = config.groupAssignments;
    }

    // Check if user is Super Admin (you)
    isSuperAdmin(userId) {
        return userId === this.superAdmin;
    }

    // Check if user is assigned admin for specific group
    isGroupAdmin(userId, groupId) {
        const group = this.groups[groupId];
        return group && group.admin === userId;
    }

    // Check if user is moderator for specific group
    isModerator(userId, groupId) {
        const group = this.groups[groupId];
        return group && group.moderators.includes(userId);
    }

    // Get permission level
    getPermissionLevel(userId, groupId) {
        if (this.isSuperAdmin(userId)) return 'superadmin';
        if (this.isGroupAdmin(userId, groupId)) return 'admin';
        if (this.isModerator(userId, groupId)) return 'moderator';
        return 'member';
    }

    // Check command permission
    canExecuteCommand(userId, groupId, commandLevel) {
        const userLevel = this.getPermissionLevel(userId, groupId);
        
        const hierarchy = {
            'superadmin': 4,
            'admin': 3,
            'moderator': 2,
            'member': 1
        };

        return hierarchy[userLevel] >= hierarchy[commandLevel];
    }
}

module.exports = new PermissionManager();
