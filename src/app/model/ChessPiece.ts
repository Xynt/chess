import Board from './Board';
import Square from './Square';

export default interface ChessPiece {
  readonly name: string;
  readonly notation: string;
  readonly icon: string;

  /**
   * Algorythm that finds the allowed destinations for this piece
   */
  findAllowedDestinations(board: Board): Square;
}
