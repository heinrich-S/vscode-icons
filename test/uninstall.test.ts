// tslint:disable only-arrow-functions
// tslint:disable no-unused-expression
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as proxyq from 'proxyquire';

describe('Uninstall: tests', function () {
  context('ensures that', function () {
    let sandbox: sinon.SinonSandbox;
    let uninstallStub: sinon.SinonStub;

    before(function () {
      proxyq.noCallThru();
    });

    after(function () {
      proxyq.callThru();
    });

    beforeEach(function () {
      sandbox = sinon.createSandbox();

      uninstallStub = sandbox.stub();
    });

    afterEach(function () {
      sandbox.restore();
    });

    context(`the 'uninstall' script`, function () {
      it(`calls the 'uninstall' function`, function () {
        proxyq('../src/uninstall', {
          './index': { uninstall: uninstallStub },
        });

        expect(uninstallStub.calledOnceWithExactly()).to.be.true;
      });
    });
  });
});
