module typeScriptIonicApp.components.home {
    export class HomeFeature {
        logout() {
            element(by.partialButtonText('Logout')).click();
            return this;
        }

        visit() {
            browser.get('#');
            return this;
        }

        isRendered():Boolean {
            return element(by.cssContainingText('h1', 'Home')).isPresent();
        }

        getCorrectUrl():string {
            return '/app/home';
        }
    }

    describe('Home Feature', function () {
        var feature;

        beforeEach(function () {
            feature = new HomeFeature();
            feature.visit();
        });

        it('should automatically redirect to #/app/home when location hash/fragment is empty', function () {
            expect(browser.getLocationAbsUrl()).toBe(feature.getCorrectUrl());
        });

        it('should render the correct contents', function () {
            expect(feature.isRendered()).toBe(true);
        });

        it('should let me log out via the link', function () {
            feature.logout();
            expect((new typeScriptIonicApp.components.login.LoginFeature()).isRendered()).toBe(true);
        });
    });
}

