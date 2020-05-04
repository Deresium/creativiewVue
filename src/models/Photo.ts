export default class Photo{
    private readonly id: string;
    private readonly url: string;

    constructor(id: string, url: string) {
        this.id = id;
        this.url = url;
    }

    get photoId(){
        return this.id;
    }

    get photoUrl(){
        return this.url;
    }

}