import { Component, Input, Output, input, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    
    @Input()
    public characterList: Character[] = [{
        name:'Trunks',
        power:10
    }]

    @Output()
    public onDelete:EventEmitter<string> = new EventEmitter();   


    // onDeleteCharacter(index:number):void{
    //     //TODO: emitir el ID del
    //     console.log({index});    
    //     this.onDelete.emit(index)    ;
    // }
    onDeleteCharacter(id?:string):void{
        if(!id) return;
        
        console.log({id});    
        this.onDelete.emit(id)    ;
    }
}
