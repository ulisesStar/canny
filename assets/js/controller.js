app.controller('Ctrl', function ($scope, $rootScope, $http, menu, mdDialog) {


    // Sidenav

    ctrl = this;

    ctrl.isOpen = isOpen;
    ctrl.toggleOpen = toggleOpen;
    ctrl.autoFocusContent = false;
    ctrl.menu = menu;

    ctrl.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    function isOpen(section) {
        return menu.isSectionSelected(section);
    };

    function toggleOpen(section) {
        menu.toggleSelectSection(section);
    };

    $scope.sectionsMenu = function (tipo_usuario) {
        if (tipo_usuario.localeCompare('user') == 0) {
            ctrl.menu.sections = [{
                name: 'Profile',
                icon: 'account_circle',
                state: 'user.profile',
                type: 'link'
            }, {
                name: 'Facturación',
                icon: 'account_balance_wallet',
                state: 'user.paymentstatus',
                type: 'toggle',
                pages: [{
                    name: 'Metodo de pago',
                    icon: 'credit_card',
                    state: 'user.paymentmethod',
                    type: 'link'
                }, {
                    name: 'Historial de pagos',
                    icon: 'history',
                    state: 'user.historical',
                    type: 'link'
                }]
            }];
        }
        if (tipo_usuario.localeCompare('admin') == 0) {
            ctrl.menu.sections = [{
                name: 'Home',
                icon: 'home',
                state: 'home',
                type: 'link'
            },
            // {
            //     name: 'Catalogo',
            //     icon: 'crop_din',
            //     state: 'Catalogo',
            //     type: 'toggle',
            //     pages: [{
            //         name: 'Admin1',
            //         icon: 'credit_card',
            //         state: 'paymentmethod',
            //         type: 'link'
            //     }, {
            //         name: 'Admin2',
            //         icon: 'history',
            //         state: 'historical',
            //         type: 'link'
            //     }]
            // },
            {
                name: 'Contactos',
                icon: 'account_circle',
                state: 'contactos',
                type: 'link'
            }];
        }
    };

    // END

});
