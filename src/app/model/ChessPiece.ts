import Square from './Square';

export default interface ChessPiece {
  readonly name: string;
  readonly notation: string;
  readonly icon: string;

  /**
   * findAllowedDestinations
   *
   */
  findAllowedDestinations(): Square;
}
