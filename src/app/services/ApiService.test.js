import ApiService from "./ApiService";

describe('Testing ApiService', () => {
  it('Should return 200 status code', done => {
      ApiService.get('/hotels', {count: 5}, (status, data) => {
          expect(status).toEqual(200);
          done();
      })
  })

  it('Should return 5 hotels', done => {
    ApiService.get('/hotels', {count: 5}, (status, data) => {
        expect(data.length).toEqual(5);
        done();
    })
})
})
