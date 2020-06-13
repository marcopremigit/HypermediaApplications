class Shuffler {
    constructor(idPosition, categories = false, dates = false) {
        this.shuffle = new window.Shuffle($(idPosition), {
            itemSelector: '.card',
            filterMode: Shuffle.FilterMode.ALL,
            group: Shuffle.ALL_ITEMS,
            speed: 400,
            isCentered: $(window).width()<1400,
        }); 
        this._activeFilters = [[], []];
        this._category = null;
        this._month = null;
        this.shuffle.filter(this._activeFilters.flat());
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
            this.shuffle.filter(this._activeFilters.flat());
            return;
        }
        this.shuffle.filter((element, shuffle) => {
            if(shuffle.group !== Shuffle.ALL_ITEMS){
                let groups = JSON.parse(element.getAttribute("data-groups"));
                let isElementInCurrentGroup = this._activeFilters.flat().some(e => groups.indexOf(e) !== -1);
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
        this._handleToggling('data-category', evt, '.categories');
    }

    /**
     * Filter the shuffle instance by items with a group that matches the button input.
     * @param {Event} evt Event object.
     */
    _handleMonthsButtonClick(evt) {
        this._handleToggling('data-month', evt, '.months');
    }

    _handleToggling(attribute, evt, cssClass){
        let button = evt.currentTarget;
        let isActive = button.classList.contains('active');
        let filter = button.getAttribute(attribute);
        let index = cssClass === '.months' ? 0 : 1;

        Array.from($(cssClass).children()).map(e => e.classList.remove('active'));
        this._activeFilters[index] = (this._activeFilters[index] && this._activeFilters[index][0] === filter) ? null : [filter];

        if(!isActive) button.classList.add('active');

        this.shuffle.group = this._activeFilters.flat().isEmpty ? Shuffle.ALL_ITEMS : this._activeFilters.flat().toString();
        
        // Filter elements
        this.shuffle.filter(this._activeFilters.flat().filter(e=>e));
        if(this._mapExists) this._reloadMarkers();
    }

    _reloadMarkers = () => GMaps.filterMarkers($('.shuffle-item--visible'));
}
