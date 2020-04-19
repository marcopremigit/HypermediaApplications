class Shuffler {
    constructor(element, categories = null) {
        this.shuffle = new window.Shuffle(element, {
            itemSelector: '.card',
            sizer: element.querySelector('.sizer'),
            filterMode: Shuffle.FilterMode.ANY,
            group: Shuffle.ALL_ITEMS
        }); 
        this.shuffle.layout();
        this._activeFilters = [];
        //add category filter only if needed
        if(categories!==null) {
            Array.from(document.getElementsByClassName("dropdown-item"))
            .map(e => {
                e.addEventListener('click', this._handleCategoryButtonClick.bind(this));
            });
        }
        //add basic search filter
        document.getElementById('searchBox').addEventListener('keyup', this._handleSearchKeyup.bind(this));
    }

    /**
     * Filter the shuffle instance by items with a title that matches the search input.
     * @param {Event} evt Event object.
     */
    _handleSearchKeyup(evt) {
        let searchText = evt.target.value.toLowerCase();
        this.shuffle.filter((element, shuffle) => {
            if(shuffle.group !== Shuffle.ALL_ITEMS){
                let groups = JSON.parse(element.getAttribute("data-groups"));
                let isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
                if(!isElementInCurrentGroup) return false;
            }
            return element.querySelector('.card-title').textContent.toLowerCase().trim().indexOf(searchText) !== -1;
        });
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

        // Filter elements
        this.shuffle.filter(this._activeFilters);
    }
}
