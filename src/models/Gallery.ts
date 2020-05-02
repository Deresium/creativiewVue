export default class Gallery{
    private readonly id: string;
    private readonly name: string;
    private readonly descriptionFr: string;
    private readonly descriptionEn: string;
    private readonly urlPictures: string[];

    constructor(id: string, name: string, descriptionFr: string, descriptionEn: string) {
        this.id = id;
        this.name = name;
        this.descriptionFr = descriptionFr;
        this.descriptionEn = descriptionEn;
        this.urlPictures = [];
    }

    public addPicture(url: string){
        this.urlPictures.push(url);
    }

    get galleryID(){
        return this.id;
    }

    get galleryName(){
        return this.name;
    }

    get galleryDescriptionFr(){
        return this.descriptionFr;
    }

    get galleryDescriptionEn(){
        return this.descriptionEn;
    }

    get galleryUrlPictures(){
        return this.urlPictures;
    }
}