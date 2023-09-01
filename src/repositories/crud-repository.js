class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async get(_id) {
        const response = await this.model.findOne({ _id });
        return response;
    }

    async getAll() {
        const response = await this.model.find({});
        return response;
    }

    async update(_id, data) {
        const response = this.model.updateOne({ _id }, { $set: data });
        return response;
    }

    async destroy(_id, userId) {
        const response = await this.model.deleteOne({ _id, userId });
        return response;
    }
}

export default CrudRepository;