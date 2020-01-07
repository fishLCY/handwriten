module.exports = Delegator;

function Delegator(proto, target) {
  // 如果这个实例对象不是Delegator构造调用的，那就用Delegator重新构造实例
  if (!(this instanceof Delegator)) return new Delegator(proto, target);
  // 所以下面的this都是Delegator的实例对象
  this.proto = proto;/* proto是context暴露的对象 */
  this.target = target;
  this.methods = [];
  this.getters = [];
  this.setters = [];
  this.fluents = [];
}


Delegator.prototype.method = function(name){
  var proto = this.proto;
  var target = this.target;
  this.methods.push(name);

  /*
    context.attachment = function(){
      return ctx.response.attachment.apply(context[response], arguments)
    }
  */

  proto[name] = function(){
    return this[target][name].apply(this[target], arguments);
  };

  return this;
};

Delegator.prototype.access = function(name){
  return this.getter(name).setter(name);
};

// this.getter("body").setter("body");
Delegator.prototype.getter = function(name){
  var proto = this.proto;
  var target = this.target;
  this.getters.push(name);

  proto.__defineGetter__(name, function(){
    return this[target][name];
  });

  return this;
};


Delegator.prototype.setter = function(name){
  var proto = this.proto;
  var target = this.target;
  this.setters.push(name);

  proto.__defineSetter__(name, function(val){
    return this[target][name] = val;
  });

  return this;
};


Delegator.prototype.fluent = function (name) {
  var proto = this.proto;
  var target = this.target;
  this.fluents.push(name);

  proto[name] = function(val){
    if ('undefined' != typeof val) {
      this[target][name] = val;
      return this;
    } else {
      return this[target][name];
    }
  };

  return this;
};
