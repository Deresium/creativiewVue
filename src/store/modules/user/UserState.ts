import Role from "@/enums/role"

export default class UserState{
    private connected: boolean;
    private role: Role | null;
    private showLoginModal: boolean;

    constructor() {
        this.connected = false;
        this.role = null;
        this.showLoginModal = false;
    }

    get isConnected() {
        return this.connected;
    }

    set isConnected(connected: boolean){
        this.connected = connected;
    }
    
    get userRole(): Role|null{
        return this.role;
    }
    
    get onlyOwner(): boolean{
        if(this.role) {
            return this.role === Role.OWNER;
        }
        return false;
    }
    
    get onlyAdmin(): boolean{
        return this.role === Role.OWNER || this.role === Role.ADMIN;
    }
    
    loginUser(role: Role){
        this.role = role;
        this.connected = true;
    }
    
    logoutUser(){
        this.role = null;
        this.connected = false;
    }

    get isShowLoginModal(){
        return this.showLoginModal;
    }

    set isShowLoginModal(showLoginModal: boolean){
        this.showLoginModal = showLoginModal;
    }
}