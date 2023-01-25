//  airplane seat example

const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH,
}
//  by default, the first enum key defaults to 0 unless defined otherwise( you can also define as a string), then subsequently increments by 1


const hcSeat = SeatChoice.AISLE