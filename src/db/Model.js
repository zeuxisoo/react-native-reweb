import Builder from './Builder';

class Model {
}

// Using proxy to build up missing method for Model
// like __call in php, method_missing in ruby
export default new Proxy(Model, {
    get(object, property) {
        if (Reflect.has(object, property) === true) {
            return object[property];
        }

        let builder = new Builder();

        return builder[property];
    }
});
