class Shuffler {
    constructor(idPosition, categories = null) {
        this.shuffle = new window.Shuffle($(idPosition), {
            itemSelector: '.card',
            filterMode: Shuffle.FilterMode.ANY,
            group: Shuffle.ALL_ITEMS,
            speed: 400,
            isCentered: true,
        }); 
        this._activeFilters = [];
        //add category filter only if needed
        if(categories!==null) {
            Array.from(document.getElementsByClassName("dropdown-item"))
            .map(e => e.addEventListener('click', this._handleCategoryButtonClick.bind(this)));
        }
        //add basic search filter
        document.getElementById('searchBox').addEventListener('keyup', this._handleSearchKeyup.bind(this));
        try{
            let _map = document.getElementById('map');
            this._mapExists = map !== null || map !== undefined;
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

    _reloadMarkers = () => GMaps.filterMarkers(document.getElementsByClassName('shuffle-item--visible'));
}
