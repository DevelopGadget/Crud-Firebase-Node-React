import Chai from 'chai';
import Http from 'chai-http'
import Index from '../Index';
Chai.use(Http);
var should = Chai.should();

describe('Query /Get', () => {
    it('GetAll Equipos Test', (done) => {
        Chai.request(Index)
            .get('/Get')
            .end(async (err, res) => {
                if (err) await done();
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});