class Shuffler {
    constructor(idPosition, categories = false, dates = false) {
        this.shuffle = new window.Shuffle($(idPosition), {
            itemSelector: '.card',
            filterMode: Shuffle.FilterMode.ANY,
            group: Shuffle.ALL_ITEMS,
            speed: 400,
            isCentered: $(window).width()<1400,
        }); 
        this._activeFilters = [];
        this.shuffle.filter(this._activeFilters);
        //add category filter only if needed
        if(categories) {
            Array.from($('.categories').children())
            .map(e => e.addEventListener('click', this._handleCategoryButtonClick.bind(this)));
        }

        //add category filter only if needed
        if(dates) {
            Array.from($('.months').children())
            .map(e => e.addEventListener('click', this._handleMonthsButtonClick.bind(this)));
        }
        //add basic search filter on mobile
        Array.from($('#searchBox-mobile')).map(e => e.addEventListener('keyup', this._handleSearchKeyup.bind(this)));
        //add basic search filter on desktop
        Array.from($('#searchBox-desktop')).map(e => e.addEventListener('keyup', this._handleSearchKeyup.bind(this)));
        try{
            let _map = $('#map');
            this._mapExists = _map !== null || _map !== undefined;
        } 
        catch(err){
            this._mapExists = false
        }
    }

    /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt Event object.
     */
    _handleSearchKeyup(evt) {
        let searchText = evt.target.value.toLowerCase();
        if(searchText === '') {
            this.shuffle.filter(this._activeFilters);
            return;
        }
        this.shuffle.filter((element, shuffle) => {
            if(shuffle.group !== Shuffle.ALL_ITEMS){
                let groups = JSON.parse(element.getAttribute("data-groups"));
                let isElementInCurrentGroup = this._activeFilters.some(e => groups.indexOf(e) !== -1);
                if(!isElementInCurrentGroup) return false;
            }
            return element.querySelector('.card-title').textContent.toLowerCase().trim().indexOf(searchText) !== -1;
        });

        if(this._mapExists) this._reloadMarkers();
    }

    /**
     * Filter the shuffle instance by items with a group that matches the button input.
     * @param {Event} evt Event object.
     */
    _handleCategoryButtonClick(evt) {
        let button = evt.currentTarget;
        let group = button.getAttribute('data-group');
        // If this button is already active, remove it from the list of filters.
        if (button.classList.contains('active')) {
            this._activeFilters.splice(this._activeFilters.indexOf(group), 1);
        } else {
            this._activeFilters.push(group);
        }

        button.classList.toggle('active');
        if(this._activeFilters.isEmpty) this.shuffle.group = Shuffle.ALL_ITEMS;
        else this.shuffle.group = this._activeFilters.toString();

        // Filter elements
        this.shuffle.filter(this._activeFilters);
        
        if(this._mapExists) this._reloadMarkers();
    }

    /**
     * Filter the shuffle instance by items with a group that matches the button input.
     * @param {Event} evt Event object.
     */
    _handleMonthsButtonClick(evt) {
        let button = evt.currentTarget;
        let month = button.getAttribute('data-month');
        // If this button is already active, remove it from the list of filters.
        if (button.classList.contains('active')) {
            this._activeFilters.splice(this._activeFilters.indexOf(month), 1);
        } else {
            this._activeFilters.push(month);
        }

        button.classList.toggle('active');
        if(this._activeFilters.isEmpty) this.shuffle.group = Shuffle.ALL_ITEMS;
        else this.shuffle.group = this._activeFilters.toString();

        // Filter elements
        this.shuffle.filter(this._activeFilters);
        
        if(this._mapExists) this._reloadMarkers();
    }

    _reloadMarkers = () => GMaps.filterMarkers($('.shuffle-item--visible'));
}
