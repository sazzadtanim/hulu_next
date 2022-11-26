const context = {
    req: IncomingMessage {
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: null,
        ended: true,
        endEmitted: false,
        reading: false,
        constructed: true,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: true,
        emitClose: true,
        autoDestroy: true,
        destroyed: true,
        errored: [Error],
        closed: true,
        closeEmitted: true,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: true,
        dataEmitted: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: null
      },
      _events: [Object: null prototype] {
        end: [Array],
        error: [Function (anonymous)]
      },
      _eventsCount: 2,
      _maxListeners: undefined,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: null,
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [ServerResponse],
        timeout: 0,
        [Symbol(async_id_symbol)]: 364090,
        [Symbol(kHandle)]: null,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 7958398,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 368038,
          [Symbol(triggerId)]: 368034
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 9543,
        [Symbol(kBytesWritten)]: 159195,
        [Symbol(RequestTimeout)]: undefined
      },
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [
        'Host',
        'localhost:3000',
        'Connection',
        'keep-alive',
        'Cache-Control',
        'max-age=0',
        'sec-ch-ua',
        '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile',
        '?0',
        'sec-ch-ua-platform',
        '"Windows"',
        'Upgrade-Insecure-Requests',
        '1',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'Accept',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site',
        'same-origin',
        'Sec-Fetch-Mode',
        'navigate',
        'Sec-Fetch-Dest',
        'document',
        'Referer',
        'http://localhost:3000/',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en-US,en;q=0.9,bn-BD;q=0.8,bn;q=0.7',
        'Cookie',
        'next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2FCreateAppUser; next-auth.csrf-token=a36775194b53f680fa79108050d879a2cae6e09c3c7391850db427f60bcdc702%7C13853ef955f0bbc19b4889d2e46ad09ed4531288c9802efcf0384895290fc9da'
      ],
      rawTrailers: [],
      aborted: true,
      upgrade: false,
      url: '/',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: null,
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [ServerResponse],
        timeout: 0,
        [Symbol(async_id_symbol)]: 364090,
        [Symbol(kHandle)]: null,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 7958398,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 368038,
          [Symbol(triggerId)]: 368034
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 9543,
        [Symbol(kBytesWritten)]: 159195,
        [Symbol(RequestTimeout)]: undefined
      },
      _consuming: false,
      _dumped: false,
      cookies: {
        'next-auth.callback-url': 'http://localhost:3000/CreateAppUser',
        'next-auth.csrf-token': 'a36775194b53f680fa79108050d879a2cae6e09c3c7391850db427f60bcdc702|13853ef955f0bbc19b4889d2e46ad09ed4531288c9802efcf0384895290fc9da'
      },
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-dest': 'document',
        referer: 'http://localhost:3000/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,bn-BD;q=0.8,bn;q=0.7',
        cookie: 'next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2FCreateAppUser; next-auth.csrf-token=a36775194b53f680fa79108050d879a2cae6e09c3c7391850db427f60bcdc702%7C13853ef955f0bbc19b4889d2e46ad09ed4531288c9802efcf0384895290fc9da'
      },
      [Symbol(kHeadersCount)]: 32,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0,
      [Symbol(RequestTimeout)]: undefined,
      [Symbol(NextRequestMeta)]: {
        __NEXT_INIT_URL: 'http://localhost:3000/',
        __NEXT_INIT_QUERY: {},
        _protocol: 'http',
        __NEXT_CLONABLE_BODY: [Object],
        __nextHadTrailingSlash: false,
        __nextIsLocaleDomain: false
      }
    },
    res: <ref *1> ServerResponse {
      _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: true,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: null,
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [Circular *1],
        timeout: 0,
        [Symbol(async_id_symbol)]: 364090,
        [Symbol(kHandle)]: null,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 7958398,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 368038,
          [Symbol(triggerId)]: 368034
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 9543,
        [Symbol(kBytesWritten)]: 159195,
        [Symbol(RequestTimeout)]: undefined
      },
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: IncomingMessage {
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        socket: [Socket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        rawHeaders: [Array],
        rawTrailers: [],
        aborted: true,
        upgrade: false,
        url: '/',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Socket],
        _consuming: false,
        _dumped: false,
        cookies: [Object],
        [Symbol(kCapture)]: false,
        [Symbol(kHeaders)]: [Object],
        [Symbol(kHeadersCount)]: 32,
        [Symbol(kTrailers)]: null,
        [Symbol(kTrailersCount)]: 0,
        [Symbol(RequestTimeout)]: undefined,
        [Symbol(NextRequestMeta)]: [Object]
      },
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      setHeader: [Function (anonymous)],
      statusCode: 200,
      flush: [Function: flush],
      write: [Function: write],
      end: [Function: end],
      on: [Function: on],
      writeHead: [Function: writeHead],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    query: {},
    resolvedUrl: '/',
    locales: undefined,
    locale: undefined,
    defaultLocale: undefined
  }
  {
    req: IncomingMessage {
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: [],
        flowing: null,
        ended: true,
        endEmitted: false,
        reading: false,
        constructed: true,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        errorEmitted: false,
        emitClose: true,
        autoDestroy: true,
        destroyed: false,
        errored: null,
        closed: false,
        closeEmitted: false,
        defaultEncoding: 'utf8',
        awaitDrainWriters: null,
        multiAwaitDrain: false,
        readingMore: true,
        dataEmitted: false,
        decoder: null,
        encoding: null,
        [Symbol(kPaused)]: null
      },
      _events: [Object: null prototype] {
        end: [Array],
        error: [Function (anonymous)]
      },
      _eventsCount: 2,
      _maxListeners: undefined,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [ServerResponse],
        timeout: 0,
        [Symbol(async_id_symbol)]: 364077,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 7956998,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 367307,
          [Symbol(triggerId)]: 367304
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [
        'Host',
        'localhost:3000',
        'Connection',
        'keep-alive',
        'Cache-Control',
        'max-age=0',
        'sec-ch-ua',
        '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile',
        '?0',
        'sec-ch-ua-platform',
        '"Windows"',
        'Upgrade-Insecure-Requests',
        '1',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        'Accept',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site',
        'same-origin',
        'Sec-Fetch-Mode',
        'navigate',
        'Sec-Fetch-Dest',
        'document',
        'Referer',
        'http://localhost:3000/',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en-US,en;q=0.9,bn-BD;q=0.8,bn;q=0.7',
        'Cookie',
        'next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2FCreateAppUser; next-auth.csrf-token=a36775194b53f680fa79108050d879a2cae6e09c3c7391850db427f60bcdc702%7C13853ef955f0bbc19b4889d2e46ad09ed4531288c9802efcf0384895290fc9da'
      ],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '/',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [ServerResponse],
        timeout: 0,
        [Symbol(async_id_symbol)]: 364077,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 7956998,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 367307,
          [Symbol(triggerId)]: 367304
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      _consuming: false,
      _dumped: false,
      cookies: {
        'next-auth.callback-url': 'http://localhost:3000/CreateAppUser',
        'next-auth.csrf-token': 'a36775194b53f680fa79108050d879a2cae6e09c3c7391850db427f60bcdc702|13853ef955f0bbc19b4889d2e46ad09ed4531288c9802efcf0384895290fc9da'
      },
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: {
        host: 'localhost:3000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-dest': 'document',
        referer: 'http://localhost:3000/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,bn-BD;q=0.8,bn;q=0.7',
        cookie: 'next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2FCreateAppUser; next-auth.csrf-token=a36775194b53f680fa79108050d879a2cae6e09c3c7391850db427f60bcdc702%7C13853ef955f0bbc19b4889d2e46ad09ed4531288c9802efcf0384895290fc9da'
      },
      [Symbol(kHeadersCount)]: 32,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0,
      [Symbol(RequestTimeout)]: undefined,
      [Symbol(NextRequestMeta)]: {
        __NEXT_INIT_URL: 'http://localhost:3000/',
        __NEXT_INIT_QUERY: {},
        _protocol: 'http',
        __NEXT_CLONABLE_BODY: [Object],
        __nextHadTrailingSlash: false,
        __nextIsLocaleDomain: false
      }
    },
    res: <ref *1> ServerResponse {
      _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: true,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: null,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: false,
      _closed: false,
      socket: Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: null,
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        parser: [HTTPParser],
        on: [Function: socketListenerWrap],
        addListener: [Function: socketListenerWrap],
        prependListener: [Function: socketListenerWrap],
        setEncoding: [Function: socketSetEncoding],
        _paused: false,
        _httpMessage: [Circular *1],
        timeout: 0,
        [Symbol(async_id_symbol)]: 364077,
        [Symbol(kHandle)]: [TCP],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: Timeout {
          _idleTimeout: -1,
          _idlePrev: null,
          _idleNext: null,
          _idleStart: 7956998,
          _onTimeout: null,
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: true,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 367307,
          [Symbol(triggerId)]: 367304
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: false,
        [Symbol(kSetKeepAliveInitialDelay)]: 0,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      _header: null,
      _keepAliveTimeout: 5000,
      _onPendingData: [Function: bound updateOutgoingData],
      req: IncomingMessage {
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        socket: [Socket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        rawHeaders: [Array],
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '/',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Socket],
        _consuming: false,
        _dumped: false,
        cookies: [Object],
        [Symbol(kCapture)]: false,
        [Symbol(kHeaders)]: [Object],
        [Symbol(kHeadersCount)]: 32,
        [Symbol(kTrailers)]: null,
        [Symbol(kTrailersCount)]: 0,
        [Symbol(RequestTimeout)]: undefined,
        [Symbol(NextRequestMeta)]: [Object]
      },
      _sent100: false,
      _expect_continue: false,
      _maxRequestsPerSocket: 0,
      setHeader: [Function (anonymous)],
      statusCode: 200,
      flush: [Function: flush],
      write: [Function: write],
      end: [Function: end],
      on: [Function: on],
      writeHead: [Function: writeHead],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    query: {},
    resolvedUrl: '/',
    locales: undefined,
    locale: undefined,
    defaultLocale: undefined
  }
  