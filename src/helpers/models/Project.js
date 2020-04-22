class Project {
    /**
     * Constructor
     *
     * @param {number} id
     * @param {string} title
     * @param {string} alias
     * @param {string} domain
     * @param {string} description
     */
    constructor({ id, title, alias, domain, description }) {
        this.id          = id
        this.title       = title
        this.alias       = alias
        this.domain      = domain
        this.description = description
    }

    /**
     * Create Project instance
     *
     * @param {Object} project
     *
     * @returns {Project}
     */
    static create(project) {
        return new this(project)
    }

    /**
     *  Create Project list instance
     *
     * @param {Array} projects
     *
     * @returns {{projectsList: *, getList(): *, getCount(): *}|*}
     */
    static createList(projects) {
        const projectsList = projects.map(project => new this(project))

        return {
            projectsList,
            getCount() {
                return projectsList.length
            },
            getList() {
                return projectsList
            },
        }
    }

    /**
     * get id
     *
     * @returns {number}
     */
    getId = () => this.id

    /**
     * get title
     *
     * @returns {string}
     */
    getTitle = () => this.title

    /**
     * get alias
     *
     * @returns {string}
     */
    getAlias = () => this.alias

    /**
     * get description
     *
     * @returns {string}
     */
    getDescription = () => this.description

    /**
     * get domain
     *
     * @returns {string}
     */
    getDomain = () => this.domain

    /**
     * Get raw model
     *
     * @returns {{domain: *, alias: *, description: *, id: *, title: *}}
     */
    getRawModel = () => ({
        id:          this.id,
        title:       this.title,
        alias:       this.alias,
        domain:      this.domain,
        description: this.description,
    })


}

export default Project
