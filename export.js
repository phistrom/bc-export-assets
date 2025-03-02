window.BC = {};
(() => {
    var w = Object.create;
    var b = Object.defineProperty;
    var C = Object.getOwnPropertyDescriptor;
    var N = Object.getOwnPropertyNames;
    var A = Object.getPrototypeOf,
        O = Object.prototype.hasOwnProperty;
    var W = (l) => b(l, "__esModule", { value: !0 });
    var Y =
        typeof require != "undefined"
            ? require
            : (l) => {
                  throw new Error('Dynamic require of "' + l + '" is not supported');
              };
    var k = (l, o) => () => (o || l((o = { exports: {} }).exports, o), o.exports);
    var E = (l, o, s) => {
            if ((o && typeof o == "object") || typeof o == "function") for (let a of N(o)) !O.call(l, a) && a !== "default" && b(l, a, { get: () => o[a], enumerable: !(s = C(o, a)) || s.enumerable });
            return l;
        },
        L = (l) => E(W(b(l != null ? w(A(l)) : {}, "default", l && l.__esModule && "default" in l ? { get: () => l.default, enumerable: !0 } : { value: l, enumerable: !0 })), l);
    var T = k((S, v) => {
        (function () {
            var l = this;
            (function () {
                (function () {
                    var s = [].slice;
                    this.LocalTime = {
                        config: {},
                        run: function () {
                            return this.getController().processElements();
                        },
                        process: function () {
                            var a, r, t, e;
                            for (r = 1 <= arguments.length ? s.call(arguments, 0) : [], t = 0, e = r.length; t < e; t++) (a = r[t]), this.getController().processElement(a);
                            return r.length;
                        },
                        getController: function () {
                            return this.controller != null ? this.controller : (this.controller = new o.Controller());
                        },
                    };
                }.call(this));
            }.call(l));
            var o = l.LocalTime;
            (function () {
                (function () {
                    o.config.i18n = {
                        en: {
                            date: {
                                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                abbrMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                yesterday: "yesterday",
                                today: "today",
                                tomorrow: "tomorrow",
                                on: "on {date}",
                                formats: { default: "%b %e, %Y", thisYear: "%b %e" },
                            },
                            time: {
                                am: "am",
                                pm: "pm",
                                singular: "a {time}",
                                singularAn: "an {time}",
                                elapsed: "{time} ago",
                                second: "second",
                                seconds: "seconds",
                                minute: "minute",
                                minutes: "minutes",
                                hour: "hour",
                                hours: "hours",
                                formats: { default: "%l:%M%P" },
                            },
                            datetime: { at: "{date} at {time}", formats: { default: "%B %e, %Y at %l:%M%P %Z" } },
                        },
                    };
                }.call(this),
                    function () {
                        (o.config.locale = "en"), (o.config.defaultLocale = "en");
                    }.call(this),
                    function () {
                        o.config.timerInterval = 6e4;
                    }.call(this),
                    function () {
                        var s, a, r;
                        (r = !isNaN(Date.parse("2011-01-01T12:00:00-05:00"))),
                            (o.parseDate = function (t) {
                                return (t = t.toString()), r || (t = a(t)), new Date(Date.parse(t));
                            }),
                            (s = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/),
                            (a = function (t) {
                                var e, n, i, h, c, u, d, f, p;
                                if ((i = t.match(s)))
                                    return i[0], (f = i[1]), (c = i[2]), (e = i[3]), (n = i[4]), (h = i[5]), (d = i[6]), (p = i[7]), p !== "Z" && (u = p.replace(":", "")), f + "/" + c + "/" + e + " " + n + ":" + h + ":" + d + " GMT" + [u];
                            });
                    }.call(this),
                    function () {
                        o.elementMatchesSelector = (function () {
                            var s, a, r, t, e, n;
                            return (
                                (s = document.documentElement),
                                (a = (r = (t = (e = (n = s.matches) != null ? n : s.matchesSelector) != null ? e : s.webkitMatchesSelector) != null ? t : s.mozMatchesSelector) != null ? r : s.msMatchesSelector),
                                function (i, h) {
                                    if ((i != null ? i.nodeType : void 0) === Node.ELEMENT_NODE) return a.call(i, h);
                                }
                            );
                        })();
                    }.call(this),
                    function () {
                        var s, a, r;
                        (s = o.config),
                            (r = s.i18n),
                            (o.getI18nValue = function (t, e) {
                                var n, i;
                                return t == null && (t = ""), (n = (e != null ? e : { locale: s.locale }).locale), (i = a(r[n], t)), i != null ? i : n !== s.defaultLocale ? o.getI18nValue(t, { locale: s.defaultLocale }) : void 0;
                            }),
                            (o.translate = function (t, e, n) {
                                var i, h, c;
                                e == null && (e = {}), (c = o.getI18nValue(t, n));
                                for (i in e) (h = e[i]), (c = c.replace("{" + i + "}", h));
                                return c;
                            }),
                            (a = function (t, e) {
                                var n, i, h, c, u;
                                for (u = t, c = e.split("."), n = 0, h = c.length; n < h; n++) {
                                    if (((i = c[n]), u[i] == null)) return null;
                                    u = u[i];
                                }
                                return u;
                            });
                    }.call(this),
                    function () {
                        var s, a, r, t, e;
                        (s = o.getI18nValue),
                            (e = o.translate),
                            (o.strftime = t = function (n, i) {
                                var h, c, u, d, f, p, y;
                                return (
                                    (c = n.getDay()),
                                    (h = n.getDate()),
                                    (f = n.getMonth()),
                                    (y = n.getFullYear()),
                                    (u = n.getHours()),
                                    (d = n.getMinutes()),
                                    (p = n.getSeconds()),
                                    i.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g, function (m, g, M) {
                                        switch (M) {
                                            case "%":
                                                return "%";
                                            case "a":
                                                return s("date.abbrDayNames")[c];
                                            case "A":
                                                return s("date.dayNames")[c];
                                            case "b":
                                                return s("date.abbrMonthNames")[f];
                                            case "B":
                                                return s("date.monthNames")[f];
                                            case "c":
                                                return n.toString();
                                            case "d":
                                                return a(h, g);
                                            case "e":
                                                return h;
                                            case "H":
                                                return a(u, g);
                                            case "I":
                                                return a(t(n, "%l"), g);
                                            case "l":
                                                return u === 0 || u === 12 ? 12 : (u + 12) % 12;
                                            case "m":
                                                return a(f + 1, g);
                                            case "M":
                                                return a(d, g);
                                            case "p":
                                                return e("time." + (u > 11 ? "pm" : "am")).toUpperCase();
                                            case "P":
                                                return e("time." + (u > 11 ? "pm" : "am"));
                                            case "S":
                                                return a(p, g);
                                            case "w":
                                                return c;
                                            case "y":
                                                return a(y % 100, g);
                                            case "Y":
                                                return y;
                                            case "Z":
                                                return r(n);
                                        }
                                    })
                                );
                            }),
                            (a = function (n, i) {
                                switch (i) {
                                    case "-":
                                        return n;
                                    default:
                                        return ("0" + n).slice(-2);
                                }
                            }),
                            (r = function (n) {
                                var i, h, c, u, d;
                                return (
                                    (d = n.toString()),
                                    (i = (h = d.match(/\(([\w\s]+)\)$/)) != null ? h[1] : void 0)
                                        ? /\s/.test(i)
                                            ? i.match(/\b(\w)/g).join("")
                                            : i
                                        : (i = (c = d.match(/(\w{3,4})\s\d{4}$/)) != null ? c[1] : void 0) || (i = (u = d.match(/(UTC[\+\-]\d+)/)) != null ? u[1] : void 0)
                                        ? i
                                        : ""
                                );
                            });
                    }.call(this),
                    function () {
                        o.CalendarDate = (function () {
                            function s(a, r, t) {
                                (this.date = new Date(Date.UTC(a, r - 1))),
                                    this.date.setUTCDate(t),
                                    (this.year = this.date.getUTCFullYear()),
                                    (this.month = this.date.getUTCMonth() + 1),
                                    (this.day = this.date.getUTCDate()),
                                    (this.value = this.date.getTime());
                            }
                            return (
                                (s.fromDate = function (a) {
                                    return new this(a.getFullYear(), a.getMonth() + 1, a.getDate());
                                }),
                                (s.today = function () {
                                    return this.fromDate(new Date());
                                }),
                                (s.prototype.equals = function (a) {
                                    return (a != null ? a.value : void 0) === this.value;
                                }),
                                (s.prototype.is = function (a) {
                                    return this.equals(a);
                                }),
                                (s.prototype.isToday = function () {
                                    return this.is(this.constructor.today());
                                }),
                                (s.prototype.occursOnSameYearAs = function (a) {
                                    return this.year === (a != null ? a.year : void 0);
                                }),
                                (s.prototype.occursThisYear = function () {
                                    return this.occursOnSameYearAs(this.constructor.today());
                                }),
                                (s.prototype.daysSince = function (a) {
                                    if (a) return (this.date - a.date) / 864e5;
                                }),
                                (s.prototype.daysPassed = function () {
                                    return this.constructor.today().daysSince(this);
                                }),
                                s
                            );
                        })();
                    }.call(this),
                    function () {
                        var s, a, r;
                        (a = o.strftime),
                            (r = o.translate),
                            (s = o.getI18nValue),
                            (o.RelativeTime = (function () {
                                function t(e) {
                                    (this.date = e), (this.calendarDate = o.CalendarDate.fromDate(this.date));
                                }
                                return (
                                    (t.prototype.toString = function () {
                                        var e, n;
                                        return (n = this.toTimeElapsedString())
                                            ? r("time.elapsed", { time: n })
                                            : (e = this.toWeekdayString())
                                            ? ((n = this.toTimeString()), r("datetime.at", { date: e, time: n }))
                                            : r("date.on", { date: this.toDateString() });
                                    }),
                                    (t.prototype.toTimeOrDateString = function () {
                                        return this.calendarDate.isToday() ? this.toTimeString() : this.toDateString();
                                    }),
                                    (t.prototype.toTimeElapsedString = function () {
                                        var e, n, i, h, c;
                                        return (
                                            (i = new Date().getTime() - this.date.getTime()),
                                            (h = Math.round(i / 1e3)),
                                            (n = Math.round(h / 60)),
                                            (e = Math.round(n / 60)),
                                            i < 0
                                                ? null
                                                : h < 10
                                                ? ((c = r("time.second")), r("time.singular", { time: c }))
                                                : h < 45
                                                ? h + " " + r("time.seconds")
                                                : h < 90
                                                ? ((c = r("time.minute")), r("time.singular", { time: c }))
                                                : n < 45
                                                ? n + " " + r("time.minutes")
                                                : n < 90
                                                ? ((c = r("time.hour")), r("time.singularAn", { time: c }))
                                                : e < 24
                                                ? e + " " + r("time.hours")
                                                : ""
                                        );
                                    }),
                                    (t.prototype.toWeekdayString = function () {
                                        switch (this.calendarDate.daysPassed()) {
                                            case 0:
                                                return r("date.today");
                                            case 1:
                                                return r("date.yesterday");
                                            case -1:
                                                return r("date.tomorrow");
                                            case 2:
                                            case 3:
                                            case 4:
                                            case 5:
                                            case 6:
                                                return a(this.date, "%A");
                                            default:
                                                return "";
                                        }
                                    }),
                                    (t.prototype.toDateString = function () {
                                        var e;
                                        return (e = s(this.calendarDate.occursThisYear() ? "date.formats.thisYear" : "date.formats.default")), a(this.date, e);
                                    }),
                                    (t.prototype.toTimeString = function () {
                                        return a(this.date, s("time.formats.default"));
                                    }),
                                    t
                                );
                            })());
                    }.call(this),
                    function () {
                        var s,
                            a = function (r, t) {
                                return function () {
                                    return r.apply(t, arguments);
                                };
                            };
                        (s = o.elementMatchesSelector),
                            (o.PageObserver = (function () {
                                function r(t, e) {
                                    (this.selector = t), (this.callback = e), (this.processInsertion = a(this.processInsertion, this)), (this.processMutations = a(this.processMutations, this));
                                }
                                return (
                                    (r.prototype.start = function () {
                                        if (!this.started) return this.observeWithMutationObserver() || this.observeWithMutationEvent(), (this.started = !0);
                                    }),
                                    (r.prototype.observeWithMutationObserver = function () {
                                        var t;
                                        if (typeof MutationObserver != "undefined" && MutationObserver !== null)
                                            return (t = new MutationObserver(this.processMutations)), t.observe(document.documentElement, { childList: !0, subtree: !0 }), !0;
                                    }),
                                    (r.prototype.observeWithMutationEvent = function () {
                                        return addEventListener("DOMNodeInserted", this.processInsertion, !1), !0;
                                    }),
                                    (r.prototype.findSignificantElements = function (t) {
                                        var e;
                                        return (e = []), (t != null ? t.nodeType : void 0) === Node.ELEMENT_NODE && (s(t, this.selector) && e.push(t), e.push.apply(e, t.querySelectorAll(this.selector))), e;
                                    }),
                                    (r.prototype.processMutations = function (t) {
                                        var e, n, i, h, c, u, d, f;
                                        for (e = [], n = 0, h = t.length; n < h; n++)
                                            switch (((u = t[n]), u.type)) {
                                                case "childList":
                                                    for (f = u.addedNodes, i = 0, c = f.length; i < c; i++) (d = f[i]), e.push.apply(e, this.findSignificantElements(d));
                                            }
                                        return this.notify(e);
                                    }),
                                    (r.prototype.processInsertion = function (t) {
                                        var e;
                                        return (e = this.findSignificantElements(t.target)), this.notify(e);
                                    }),
                                    (r.prototype.notify = function (t) {
                                        if (t != null ? t.length : void 0) return typeof this.callback == "function" ? this.callback(t) : void 0;
                                    }),
                                    r
                                );
                            })());
                    }.call(this),
                    function () {
                        var s,
                            a,
                            r,
                            t,
                            e = function (n, i) {
                                return function () {
                                    return n.apply(i, arguments);
                                };
                            };
                        (r = o.parseDate),
                            (t = o.strftime),
                            (a = o.getI18nValue),
                            (s = o.config),
                            (o.Controller = (function () {
                                function n() {
                                    (this.processElements = e(this.processElements, this)), (this.pageObserver = new o.PageObserver(i, this.processElements));
                                }
                                var i, h, c;
                                return (
                                    (i = "time[data-local]:not([data-localized])"),
                                    (n.prototype.start = function () {
                                        if (!this.started) return this.processElements(), this.startTimer(), this.pageObserver.start(), (this.started = !0);
                                    }),
                                    (n.prototype.startTimer = function () {
                                        var u;
                                        if ((u = s.timerInterval)) return this.timer != null ? this.timer : (this.timer = setInterval(this.processElements, u));
                                    }),
                                    (n.prototype.processElements = function (u) {
                                        var d, f, p;
                                        for (u == null && (u = document.querySelectorAll(i)), f = 0, p = u.length; f < p; f++) (d = u[f]), this.processElement(d);
                                        return u.length;
                                    }),
                                    (n.prototype.processElement = function (u) {
                                        var d, f, p, y, m, g;
                                        if (((f = u.getAttribute("datetime")), (p = u.getAttribute("data-format")), (y = u.getAttribute("data-local")), (m = r(f)), !isNaN(m)))
                                            return (
                                                u.hasAttribute("title") || ((g = t(m, a("datetime.formats.default"))), u.setAttribute("title", g)),
                                                (u.textContent = d = (function () {
                                                    switch (y) {
                                                        case "time":
                                                            return h(u), t(m, p);
                                                        case "date":
                                                            return h(u), c(m).toDateString();
                                                        case "time-ago":
                                                            return c(m).toString();
                                                        case "time-or-date":
                                                            return c(m).toTimeOrDateString();
                                                        case "weekday":
                                                            return c(m).toWeekdayString();
                                                        case "weekday-or-date":
                                                            return c(m).toWeekdayString() || c(m).toDateString();
                                                    }
                                                })()),
                                                u.hasAttribute("aria-label") ? void 0 : u.setAttribute("aria-label", d)
                                            );
                                    }),
                                    (h = function (u) {
                                        return u.setAttribute("data-localized", "");
                                    }),
                                    (c = function (u) {
                                        return new o.RelativeTime(u);
                                    }),
                                    n
                                );
                            })());
                    }.call(this),
                    function () {
                        var s, a, r, t;
                        (t = !1),
                            (s = function () {
                                return document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading";
                            }),
                            (a = function (e) {
                                var n;
                                return (n = typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : void 0) != null ? n : setTimeout(e, 17);
                            }),
                            (r = function () {
                                var e;
                                return (e = o.getController()), e.start();
                            }),
                            (o.start = function () {
                                if (!t) return (t = !0), (typeof MutationObserver != "undefined" && MutationObserver !== null) || s() ? r() : a(r);
                            }),
                            window.LocalTime === o && o.start();
                    }.call(this));
            }.call(this),
                typeof v == "object" && v.exports ? (v.exports = o) : typeof define == "function" && define.amd && define(o));
        }.call(S));
    });
    var x = L(T());
    (function () {
        "use strict";
        var l = (function () {
                function r(t) {
                    (this.size = t), (this.keys = []), (this.values = {});
                }
                return (
                    (r.prototype.has = function (t) {
                        return t in this.values;
                    }),
                    (r.prototype.read = function (t) {
                        return this.values[t];
                    }),
                    (r.prototype.touch = function (t) {
                        var e;
                        return (e = this.keys.indexOf(t)), this.keys.splice(e, 1), this.keys.unshift(t);
                    }),
                    (r.prototype.get = function (t) {
                        var e;
                        return (e = this.read(t)), this.touch(t), e;
                    }),
                    (r.prototype.put = function (t, e) {
                        return (this.values[t] = e), this.keys.unshift(t), this.trim(), e;
                    }),
                    (r.prototype.fetch = function (t, e) {
                        return this.has(t) ? this.get(t) : this.put(t, e());
                    }),
                    (r.prototype.trim = function () {
                        var t, e, n, i, h;
                        for (i = this.keys.splice(this.size), h = [], t = 0, n = i.length; t < n; t++) (e = i[t]), h.push(delete this.values[e]);
                        return h;
                    }),
                    r
                );
            })(),
            o = (function () {
                var r;
                (t.pattern = /^\s*(\d{1,2})(?:[.:]?([0-5]\d?)?)?(?:[.:]?([0-5]\d?)?)?(?:\s*([ap])(?:\.?m\.?)?|\s*[h]?)?\s*$/i),
                    (t.parse = function (e) {
                        var n, i, h, c, u, d, f, p, y;
                        if (((y = "" + e), e instanceof Date)) return (c = e.getHours()), (d = e.getMinutes()), (p = e.getSeconds()), new this(c, d, p);
                        if (y.match(s.iso8601Pattern)) return this.parse(new Date(Date.parse(y)));
                        if ((u = y.match(this.pattern)))
                            return (
                                (n = u[0]),
                                (c = u[1]),
                                (d = u[2]),
                                (p = u[3]),
                                (h = u[4]),
                                (c = parseInt(c, 10)),
                                (d = parseInt(d != null ? d : "0", 10)),
                                (p = parseInt(p != null ? p : "0", 10)),
                                (i = h != null ? h.match(/a/i) : void 0),
                                (f = h != null ? h.match(/p/i) : void 0),
                                1 <= c && c <= 11 && f && (c += 12),
                                c === 12 && i && (c = 0),
                                new this(c, d, p)
                            );
                        throw Error("invalid time (" + e + ")");
                    }),
                    (t.isValid = function (e) {
                        try {
                            return this.parse(e), !0;
                        } catch (n) {
                            return !1;
                        }
                    });
                function t(e, n, i) {
                    var h, c, u;
                    if (((this.hour = e != null ? e : 0), (this.minute = n != null ? n : 0), (this.second = i != null ? i : 0), !(0 <= (h = this.hour) && h <= 23 && 0 <= (c = this.minute) && c <= 59 && 0 <= (u = this.second) && u <= 59)))
                        throw Error("invalid time (" + this.hour + ", " + this.minute + ", " + this.second + ")");
                    (this.ampm = this.hour < 12 ? "am" : "pm"), this.hour === 0 ? (this.hour12 = 12) : this.hour > 12 ? (this.hour12 = this.hour - 12) : (this.hour12 = this.hour);
                }
                return (
                    (t.prototype.toString = function (e) {
                        var n;
                        return e == null && (e = {}), (n = [r(this.minute), r(this.second)]), e.short && this.second === 0 && n.pop(), n.length && (n = ":" + n.join(":")), e["12"] ? "" + this.hour12 + n + this.ampm : "" + this.hour + n;
                    }),
                    (t.prototype.toFriendlyString = function () {
                        return this.toString({ 12: !0, short: !0 });
                    }),
                    (t.prototype.valueOf = function () {
                        return this.hour * 1e4 + this.minute * 100 + this.second;
                    }),
                    (r = function (e) {
                        return e < 10 ? "0" + e : "" + e;
                    }),
                    t
                );
            })(),
            s = (function () {
                var r;
                (t.iso8601Pattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|[-+]?[\d:]+)$/),
                    (t.parse = function (e, n) {
                        var i, h;
                        return n != null ? ((i = a.parse(e)), (h = o.parse(n))) : ((i = a.parse(e)), (h = o.parse(e))), new this(i, h);
                    });
                function t(e, n) {
                    (this.calendarDate = e),
                        (this.calendarTime = n),
                        (this.year = this.calendarDate.year),
                        (this.month = this.calendarDate.month),
                        (this.day = this.calendarDate.day),
                        (this.hour = this.calendarTime.hour),
                        (this.minute = this.calendarTime.minute),
                        (this.second = this.calendarTime.second);
                }
                return (
                    (t.prototype.isFuture = function () {
                        return this.toLocalDate() > new Date();
                    }),
                    (t.prototype.toLocalDate = function () {
                        return new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, 0);
                    }),
                    (t.prototype.toUTCDate = function () {
                        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
                    }),
                    (t.prototype.toLocalString = function () {
                        return r(this.toLocalDate());
                    }),
                    (t.prototype.toUTCString = function () {
                        return r(this.toUTCDate());
                    }),
                    (t.prototype.toString = function () {
                        return this.toLocalString();
                    }),
                    (t.prototype.equals = function (e) {
                        return this.toLocalDate === e.toLocalDate();
                    }),
                    (r = function (e) {
                        return JSON.parse(JSON.stringify(e));
                    }),
                    t
                );
            })(),
            a = (function () {
                (r.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]),
                    (r.abbreviatedMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]),
                    (r.weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]),
                    (r.abbreviatedWeekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
                    (r.firstDayOfWeek = 0),
                    (r.cache = new l(512)),
                    (r.today = function () {
                        return this.parse(window.__mockDate || new Date());
                    }),
                    (r.parse = function (t) {
                        var e;
                        return (
                            t == null && (t = ""),
                            (e = "" + t),
                            this.cache.fetch(
                                e,
                                (function (n) {
                                    return function () {
                                        var i, h, c;
                                        return t instanceof Date
                                            ? new n(t.getFullYear(), t.getMonth() + 1, t.getDate())
                                            : Array.isArray(t)
                                            ? ((c = t[0]), (h = t[1]), (i = t[2]), new n(c, h, i))
                                            : e.trim()
                                            ? e.match(s.iso8601Pattern)
                                                ? n.parse(new Date(Date.parse(e)))
                                                : n.parse(e.split("-"))
                                            : n.today();
                                    };
                                })(this)
                            )
                        );
                    });
                function r(t, e, n) {
                    (this.date = new Date(Date.UTC(t, e - 1))),
                        this.date.setUTCDate(n),
                        (this.year = this.date.getUTCFullYear()),
                        (this.month = this.date.getUTCMonth() + 1),
                        (this.day = this.date.getUTCDate()),
                        (this.value = this.date.getTime());
                }
                return (
                    (r.prototype.beginningOfYear = function () {
                        return new this.constructor(this.year, 1, 1);
                    }),
                    (r.prototype.beginningOfMonth = function () {
                        return new this.constructor(this.year, this.month, 1);
                    }),
                    (r.prototype.endOfMonth = function () {
                        return this.nextMonth(1, 1).previous();
                    }),
                    (r.prototype.beginningOfWeek = function (t) {
                        var e;
                        return t == null && (t = this.constructor.firstDayOfWeek), (e = this.date.getUTCDay() - t), e < 0 && (e += 7), this.previous(e);
                    }),
                    (r.prototype.nextMonth = function (t, e) {
                        var n, i;
                        if ((t == null && (t = 1), e == null && (e = 1), t === 0)) return this.beginningOfMonth();
                        for (n = this.month + t, i = this.year; n > 12; ) (n -= 12), i++;
                        for (; n < 1; ) (n += 12), i--;
                        return new this.constructor(i, n, e);
                    }),
                    (r.prototype.previousMonth = function (t) {
                        return t == null && (t = 1), this.nextMonth(-t);
                    }),
                    (r.prototype.next = function (t) {
                        return t == null && (t = 1), t === 0 ? this : new this.constructor(this.year, this.month, this.day + t);
                    }),
                    (r.prototype.previous = function (t) {
                        return t == null && (t = 1), t === 0 ? this : this.next(-t);
                    }),
                    (r.prototype.equals = function (t) {
                        return (t != null ? t.value : void 0) === this.value;
                    }),
                    (r.prototype.is = function (t) {
                        return this.equals(t);
                    }),
                    (r.prototype.isnt = function (t) {
                        return !this.equals(t);
                    }),
                    (r.prototype.fallsOnSameYearAs = function (t) {
                        return this.year === (t != null ? t.year : void 0);
                    }),
                    (r.prototype.occursThisYear = function () {
                        return this.fallsOnSameYearAs(this.constructor.today());
                    }),
                    (r.prototype.fallsOnSameMonthAs = function (t) {
                        return this.beginningOfMonth().equals(t != null ? t.beginningOfMonth() : void 0);
                    }),
                    (r.prototype.occursThisMonth = function () {
                        return this.fallsOnSameMonthAs(this.constructor.today());
                    }),
                    (r.prototype.fallsOnSameWeekAs = function (t) {
                        return this.beginningOfWeek().equals(t != null ? t.beginningOfWeek() : void 0);
                    }),
                    (r.prototype.occursThisWeek = function () {
                        return this.fallsOnSameWeekAs(this.constructor.today());
                    }),
                    (r.prototype.isToday = function () {
                        return this.equals(this.constructor.today());
                    }),
                    (r.prototype.isYesterday = function () {
                        return this.equals(this.constructor.today().previous());
                    }),
                    (r.prototype.isFuture = function () {
                        return this.daysSince(this.constructor.today()) > 0;
                    }),
                    (r.prototype.isPast = function () {
                        return this.daysSince(this.constructor.today()) < 0;
                    }),
                    (r.prototype.isWeekend = function () {
                        var t;
                        return (t = this.date.getUTCDay()) === 0 || t === 6;
                    }),
                    (r.prototype.daysSince = function (t) {
                        if (t) return (this.date - t.date) / (1e3 * 60 * 60 * 24);
                    }),
                    (r.prototype.weeksSince = function (t) {
                        if (t) return this.beginningOfWeek().daysSince(t.beginningOfWeek()) / 7;
                    }),
                    (r.prototype.getWeekNumber = function () {
                        return this.beginningOfWeek();
                    }),
                    (r.prototype.getMonthName = function () {
                        return this.constructor.monthNames[this.month - 1];
                    }),
                    (r.prototype.getAbbreviatedMonthName = function () {
                        return this.constructor.abbreviatedMonthNames[this.month - 1];
                    }),
                    (r.prototype.getWeekdayName = function () {
                        return this.constructor.weekdayNames[this.date.getUTCDay()];
                    }),
                    (r.prototype.getAbbreviatedWeekdayName = function () {
                        return this.constructor.abbreviatedWeekdayNames[this.date.getUTCDay()];
                    }),
                    (r.prototype.getLocalDate = function () {
                        return new Date(this.year, this.month - 1, this.day);
                    }),
                    (r.prototype.compareTo = function (t) {
                        return this.date > (t != null ? t.date : void 0) ? 1 : this.date < (t != null ? t.date : void 0) ? -1 : 0;
                    }),
                    (r.prototype.shortWithYear = function () {
                        return this.getAbbreviatedMonthName() + " " + this.day + ", " + this.year;
                    }),
                    (r.prototype.longWithYear = function () {
                        return this.getMonthName() + " " + this.day + ", " + this.year;
                    }),
                    (r.prototype.abbreviatedShortWithWeekday = function () {
                        return this.getAbbreviatedWeekdayName() + ", " + this.getAbbreviatedMonthName() + " " + this.day;
                    }),
                    (r.prototype.abbreviatedShort = function () {
                        return this.getAbbreviatedMonthName() + " " + this.day;
                    }),
                    (r.prototype.dayThisWeek = function () {
                        var t;
                        if (((t = this.constructor.today()), this.equals(t))) return "Today";
                        if (this.fallsOnSameWeekAs(t)) return this.getWeekdayName();
                    }),
                    (r.prototype.relativeDateLabel = function () {
                        if (this.week != null && this.wday != null) return "Week " + (this.week + 1) + ", " + this.constructor.weekdayNames[this.wday];
                    }),
                    (r.prototype.relativeWeekdayOrDate = function ({ relativePrefix: t = "", absolutePrefix: e = "" } = {}) {
                        var n;
                        switch (!1) {
                            case !this.isToday():
                                return t + "Today";
                            case !this.isYesterday():
                                return t + "Yesterday";
                            case !this.occursThisWeek():
                                return e + this.getWeekdayName();
                            default:
                                return (n = this.occursThisYear() ? "" : " " + this.year), e + this.getWeekdayName() + ", " + this.getMonthName() + " " + this.day + n;
                        }
                    }),
                    (r.prototype.ordinalSuffix = function () {
                        if (this.day > 3 && this.day < 21) return "th";
                        switch (this.day % 10) {
                            case 1:
                                return "st";
                            case 2:
                                return "nd";
                            case 3:
                                return "rd";
                            default:
                                return "th";
                        }
                    }),
                    (r.prototype.toString = function () {
                        var t, e, n;
                        return this.stringValue != null
                            ? this.stringValue
                            : (this.stringValue = ((n = this.year), (e = this.month < 10 ? "0" + this.month : this.month), (t = this.day < 10 ? "0" + this.day : this.day), n + "-" + e + "-" + t));
                    }),
                    r
                );
            })();
        (window.CalendarDate = a), (window.CalendarTime = o), (window.CalendarDateTime = s);
    })();
    var D = !1;
    document.addEventListener("DOMContentLoaded", () => (D = !0));
    BC.ready = function (l) {
        return l == null ? D : D ? l() : document.addEventListener("DOMContentLoaded", l);
    };
    BC.cableReady = function (l) {
        return BC.cable ? l() : document.addEventListener("bc:cable-ready", l);
    };
    BC.ready(() => {
        let l;
        Array.from(document.querySelectorAll(".schedule-entry")).forEach((o) => {
            let s = CalendarDate.parse(o.dataset.startDatetime).longWithYear(),
                a = CalendarDate.parse(o.dataset.endDatetime).longWithYear();
            if (l !== s) {
                l = s;
                let t = document.createElement("div");
                (t.innerHTML = `<h4 class="date-divider date-divider--schedule flush--bottom"><span class="date-divider__inner">${l}</span></h4>`), o.parentNode.insertBefore(t, o);
            }
            let r = s === a ? o.querySelectorAll("[data-behavior=remove-if-same-start-and-end-dates]") : o.querySelectorAll("[data-behavior=remove-if-different-start-and-end-dates]");
            Array.from(r).forEach((t) => t.parentElement.removeChild(t));
        });
    });
    BC.ready(() => {
        let l;
        Array.from(document.querySelectorAll(".chat-line")).forEach((o) => {
            let s = CalendarDate.parse(o.dataset.datetime);
            if (l !== s.longWithYear()) {
                l = s.longWithYear();
                let a = document.createElement("tr");
                (a.innerHTML = `<th class="date-divider" colspan="3"><span class="date-divider__inner">${l}</span></th>`), o.parentNode.insertBefore(a, o);
            }
        });
    });
    BC.ready(() => {
        let l;
        Array.from(document.querySelectorAll(".question-answer")).forEach((o) => {
            let s = CalendarDate.parse(o.dataset.datetime);
            if (l !== s.longWithYear()) {
                l = s.longWithYear();
                let a = document.createElement("div");
                (a.innerHTML = `<h4 class="date-divider"><span class="date-divider__inner">${l}</span></h4>`), o.parentNode.insertBefore(a, o);
            }
        });
    });
})();
