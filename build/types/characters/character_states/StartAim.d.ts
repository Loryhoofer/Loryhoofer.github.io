import { CharacterStateBase } from './_stateLibrary';
import { ICharacterState } from '../../interfaces/ICharacterState';
import { Character } from '../Character';
export declare class StartAim extends CharacterStateBase implements ICharacterState {
    constructor(character: Character);
    update(timeStep: number): void;
    onInputChange(): void;
}
