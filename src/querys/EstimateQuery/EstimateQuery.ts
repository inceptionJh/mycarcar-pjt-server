export default class EstimateQuery {
  getEstimate(estimateId: number) {
    return `SELECT * FROM car_estimate WHERE car_estimate_no="${estimateId}"`;
  }

  getEstimateList(id: string) {
    return `
      SELECT
        car_estimate_no,
        capital,
        car_brand, car_series, car_model, car_detail, car_grade, car_option,
        at_date
      FROM car_estimate
      WHERE mb_id="${id}"
    `;
  }

  getInsertEstimate(
    memberId: string,
    memberName: string,
    memberPhone: string,
    memberEmail: string,
    origin: string,
    brand: string,
    series: string,
    model: string,
    detail: string,
    grade: string,
    option: string,
    capital: string,
    rentalPeriod: number,
    insurancePlan: number,
    carPrice: number,
    carOptionPrice: number,
    carFinalPrice: number,
    deposit: number,
    advancePay: number
  ) {
    return `
      INSERT INTO car_estimate (
        mb_id, mb_name, mb_phone, mb_email,

        car_origin, car_brand, car_series, car_model, car_detail, car_grade, car_option,
        capital, car_rental_period, car_insurance_plan, car_price, car_option_price, car_final_price,

        car_deposit, car_advance_pay
      )
      VALUES (
        "${memberId}", "${memberName}", "${memberPhone}", "${memberEmail}",
        "${origin}", "${brand}", "${series}", "${model}", "${detail}", "${grade}", "${option}",
        "${capital}", ${rentalPeriod}, "${insurancePlan}", ${carPrice}, ${carOptionPrice}, ${carFinalPrice},
        ${deposit}, ${advancePay}
      )
    `;
  }
}
