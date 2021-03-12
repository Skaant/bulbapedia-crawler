(function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    define("src/_models/_interfaces/Page/Page.interface", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
    });
    define("src/_models/_interfaces/PageParams/PageParams.interface", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
    });
    define("src/_models/Page/Page", ["require", "exports", "fs"], function (require, exports, fs_1) {
        "use strict";
        exports.__esModule = true;
        var Page = /** @class */ (function () {
            function Page(params) {
                var _this = this;
                this.JSONCachePath = null;
                this.HTMLCachePath = null;
                this.url = null;
                Object.entries(params)
                    .forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this[key] = value;
                });
            }
            Page.prototype.JSONCacheExists = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (typeof this.JSONCachePath !== 'string')
                                    throw new Error('JSONCachePath not initialized');
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, fs_1.promises.stat(this.JSONCachePath)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/, true];
                            case 3:
                                err_1 = _a.sent();
                                if (err_1.code === 'ENOENT')
                                    return [2 /*return*/, false];
                                throw err_1;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
            return Page;
        }());
        exports["default"] = Page;
    });
    define("src/_models/_pages/Pokemon/Pokemon.page", ["require", "exports", "src/_models/Page/Page"], function (require, exports, Page_1) {
        "use strict";
        exports.__esModule = true;
        var PokemonPage = /** @class */ (function (_super) {
            __extends(PokemonPage, _super);
            function PokemonPage(index) {
                return _super.call(this, {
                    JSONCachePath: PokemonPage.CACHE_PATH
                        + '/' + index + '.json'
                }) || this;
            }
            PokemonPage.CACHE_PATH = '_cache/pokemons/';
            return PokemonPage;
        }(Page_1["default"]));
        exports["default"] = PokemonPage;
    });
    define("index", ["require", "exports", "src/_models/_pages/Pokemon/Pokemon.page"], function (require, exports, Pokemon_page_1) {
        "use strict";
        exports.__esModule = true;
        (new Pokemon_page_1["default"](0)).JSONCacheExists()
            .then(function (result) { return console.log(result); });
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports["default"] : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();