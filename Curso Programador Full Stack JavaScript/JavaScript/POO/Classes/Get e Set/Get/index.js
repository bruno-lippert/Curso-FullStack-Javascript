class ResourceProcessStation {
    constructor (name, monthylyProcessedLoad){
        this.name = name
        this.monthylyProcessedLoad = monthylyProcessedLoad
    }

    get weekProcessedLoad() {
        return this.monthylyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)
console.log(resourceProcessor)