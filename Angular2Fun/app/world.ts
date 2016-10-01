import { Continent } from './continent';

export class World {

    continents: Continent[];

    constructor() {
        this.continents = [
            new Continent('Africa'),
            new Continent('Antarctica'),
            new Continent('Asia'),
            new Continent('Australia'),
            new Continent('Europe'),
            new Continent('North America'),
            new Continent('South America')
        ];
    }
}