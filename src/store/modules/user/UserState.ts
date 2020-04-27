export default class UserState{
    private connected: boolean;
    private admin: boolean;
    private showLoginModal: boolean;

    constructor() {
        this.connected = false;
        this.admin = false;
        this.showLoginModal = false;
    }

    get isConnected() {
        return this.connected;
    }

    set isConnected(connected: boolean){
        this.connected = connected;
    }

    get isAdmin(){
        return this.admin;
    }

    set isAdmin(admin: boolean){
        this.admin = admin;
    }

    get isShowLoginModal(){
        return this.showLoginModal;
    }

    set isShowLoginModal(showLoginModal: boolean){
        this.showLoginModal = showLoginModal;
    }
}