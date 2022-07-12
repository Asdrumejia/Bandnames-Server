const Band = require('./band');


class BandList {

    constructor( ) {
     
        this.bands = [
            new Band('Metallica'),
            new Band('Heroes del silencio'),
            new Band('Bon Jovi'),
            new Band('Breakin Benjamin')
        ];

}


// Para añadir banda
 addBand( name ) {
      const newBand = new Band( name );
      this.bands.push( newBand );
      return this.bands
 }

 // Para borrar o remover banda
 removeBand( id ) {
      this.bands = this.bands.filter( ( band ) => band.id !== id );
 }

 // Para retornar u obtener bandas
 getBands(){
    return this.bands;
 }

 // Para incrementar la cantidad de votos
 increaseVotes( id ) {
    this.bands = this.bands.map( band => {

        if ( band.id === id ) {
            band.votes += 1;
        }
          return band;
    })
 }

 
 // Para cambiar nombre
 changeName( id, newName ) {
    this.bands = this.bands.map( band => {

        if ( band.id === id ) {
            band.name = newName;
        }
          return band;
    })
 }

}

module.exports = BandList;



