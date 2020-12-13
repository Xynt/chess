// eslint-disable-next-line import/no-cycle
import ChessPiece from './ChessPiece';

export default class Square {
  readonly rowI: number;

  readonly columnI: number;

  public piece: ChessPiece;

  constructor(rowI: number, columnI: number, piece: ChessPiece) {
    this.rowI = rowI;
    this.columnI = columnI;
    this.piece = piece;
  }
}
