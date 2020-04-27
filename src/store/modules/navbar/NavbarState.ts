export default class NavbarState{
    private showBackgroundColor: boolean;

    constructor() {
        this.showBackgroundColor = true;
    }

    get showBackgroundColorState(){
        return this.showBackgroundColor;
    }

    set showBackgroundColorState(showBackgroundColor: boolean){
        this.showBackgroundColor = showBackgroundColor;
    }
}