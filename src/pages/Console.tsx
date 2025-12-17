import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface FileItem {
  name: string;
  type: "file" | "folder";
  size?: string;
  modified: string;
}

const Console = () => {
  const navigate = useNavigate();
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Добро пожаловать в Бисквит Хостинг Terminal",
    "Введите 'help' для списка доступных команд",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentPath, setCurrentPath] = useState("/home/user");
  const [files, setFiles] = useState<FileItem[]>([
    { name: "public_html", type: "folder", modified: "2024-12-18 10:30" },
    { name: "logs", type: "folder", modified: "2024-12-18 09:15" },
    { name: "backups", type: "folder", modified: "2024-12-17 22:00" },
    { name: "index.php", type: "file", size: "4.2 KB", modified: "2024-12-18 11:45" },
    { name: "config.json", type: "file", size: "1.8 KB", modified: "2024-12-18 10:20" },
    { name: ".htaccess", type: "file", size: "892 B", modified: "2024-12-15 14:30" },
  ]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [sftpConnected, setSftpConnected] = useState(false);
  const [sftpHost, setSftpHost] = useState("sftp.biskvit-hosting.ru");
  const [sftpPort, setSftpPort] = useState("22");
  const [sftpUser, setSftpUser] = useState("");
  const [serverStatus, setServerStatus] = useState<"running" | "stopped">("running");
  const [showEditor, setShowEditor] = useState(false);
  const [editingFile, setEditingFile] = useState<string>("");
  const [fileContent, setFileContent] = useState("");
  const [showViewer, setShowViewer] = useState(false);
  const [viewingFile, setViewingFile] = useState<string>("");
  const [cpuUsage, setCpuUsage] = useState(12);
  const [ramUsage, setRamUsage] = useState(25);
  const [diskUsage, setDiskUsage] = useState(84);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const cmd = currentCommand.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "help":
        response = "Доступные команды:\n  ls - список файлов\n  pwd - текущий путь\n  clear - очистить консоль\n  status - статус сервера\n  tariff - информация о тарифе";
        break;
      case "ls":
        response = files.map(f => `${f.type === "folder" ? "📁" : "📄"} ${f.name}`).join("\n");
        break;
      case "pwd":
        response = currentPath;
        break;
      case "clear":
        setTerminalHistory([]);
        setCurrentCommand("");
        return;
      case "status":
        response = "✓ Сервер: Онлайн\n✓ CPU: 12%\n✓ RAM: 256MB / 2GB\n✓ Disk: 42GB / 50GB";
        break;
      case "tariff":
        response = "Тариф: Бизнес\nЦена: ₽799/мес\nSSD: 50 GB\nСайтов: 5\nТрафик: Безлимит";
        break;
      default:
        response = `Команда '${cmd}' не найдена. Введите 'help' для списка команд.`;
    }

    setTerminalHistory([...terminalHistory, `user@biskvit:${currentPath}$ ${currentCommand}`, response]);
    setCurrentCommand("");
  };

  const handleSftpConnect = () => {
    if (!sftpUser.trim()) return;
    setSftpConnected(true);
    setTerminalHistory([...terminalHistory, `✓ SFTP подключение к ${sftpHost}:${sftpPort} установлено`]);
  };

  const handleFileClick = (file: FileItem) => {
    if (file.type === "folder") {
      setCurrentPath(`${currentPath}/${file.name}`);
      setSelectedFile(null);
    } else {
      setSelectedFile(file.name);
    }
  };

  const handleEditFile = (fileName: string) => {
    setEditingFile(fileName);
    const mockContent = `<?php\n// ${fileName}\necho "Hello from Biskvit Hosting!";\n?>`;
    setFileContent(mockContent);
    setShowEditor(true);
  };

  const handleSaveFile = () => {
    setShowEditor(false);
    setTerminalHistory([...terminalHistory, `✓ Файл ${editingFile} успешно сохранён`]);
  };

  const handleServerAction = (action: "start" | "stop" | "restart") => {
    const messages = {
      start: "✓ Сервер запущен",
      stop: "✓ Сервер остановлен",
      restart: "✓ Сервер перезапущен"
    };
    
    if (action === "start") setServerStatus("running");
    if (action === "stop") setServerStatus("stopped");
    if (action === "restart") {
      setServerStatus("stopped");
      setTimeout(() => setServerStatus("running"), 1000);
    }
    
    setTerminalHistory([...terminalHistory, messages[action]]);
  };

  const handleDeleteFile = (fileName: string) => {
    setFiles(files.filter(f => f.name !== fileName));
    setTerminalHistory([...terminalHistory, `✓ Файл ${fileName} удалён`]);
  };

  const handleViewFile = (fileName: string) => {
    setViewingFile(fileName);
    const mockContent = `<?php\n// ${fileName}\necho "Hello from Biskvit Hosting!";\n?>`;
    setFileContent(mockContent);
    setShowViewer(true);
  };

  return (
    <div className="min-h-screen bg-secondary-900">
      <nav className="bg-secondary-800 border-b border-secondary-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Icon name="Cookie" className="text-white" size={24} />
                </div>
                <span className="text-xl font-heading font-bold text-white">Бисквит Хостинг</span>
              </button>
              <Badge className="bg-primary-500 text-white">Консоль</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-2 text-secondary-400 text-sm">
                  <div className={`w-2 h-2 rounded-full ${serverStatus === "running" ? "bg-green-500" : "bg-red-500"}`}></div>
                  <Icon name="Server" size={16} />
                  <span>srv-12.biskvit.ru</span>
                  <Badge className={serverStatus === "running" ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
                    {serverStatus === "running" ? "Онлайн" : "Оффлайн"}
                  </Badge>
                </div>
                <div className="flex gap-1 ml-4">
                  <Button 
                    onClick={() => handleServerAction("start")} 
                    size="sm" 
                    variant="ghost" 
                    className="text-green-400 hover:text-green-300 hover:bg-secondary-700"
                    disabled={serverStatus === "running"}
                  >
                    <Icon name="Play" size={16} />
                  </Button>
                  <Button 
                    onClick={() => handleServerAction("stop")} 
                    size="sm" 
                    variant="ghost" 
                    className="text-red-400 hover:text-red-300 hover:bg-secondary-700"
                    disabled={serverStatus === "stopped"}
                  >
                    <Icon name="Square" size={16} />
                  </Button>
                  <Button 
                    onClick={() => handleServerAction("restart")} 
                    size="sm" 
                    variant="ghost" 
                    className="text-primary-400 hover:text-primary-300 hover:bg-secondary-700"
                  >
                    <Icon name="RotateCw" size={16} />
                  </Button>
                </div>
              </div>
              <Button onClick={() => navigate("/")} variant="outline" className="border-secondary-600 text-white hover:bg-secondary-700">
                <Icon name="Home" className="mr-2" size={16} />
                Главная
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <Card className="bg-secondary-800 border-secondary-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Server" className="text-primary-500" size={24} />
                Панель управления хостингом
              </CardTitle>
              <CardDescription className="text-secondary-400">
                Управляйте вашим сервером через терминал, файловый менеджер и SFTP
              </CardDescription>
            </CardHeader>
          </Card>

          <Tabs defaultValue="monitor" className="w-full">
            <TabsList className="bg-secondary-800 border border-secondary-700">
              <TabsTrigger value="monitor" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
                <Icon name="Activity" className="mr-2" size={16} />
                Мониторинг
              </TabsTrigger>
              <TabsTrigger value="terminal" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
                <Icon name="Terminal" className="mr-2" size={16} />
                Терминал
              </TabsTrigger>
              <TabsTrigger value="files" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
                <Icon name="Folder" className="mr-2" size={16} />
                Файловый менеджер
              </TabsTrigger>
              <TabsTrigger value="sftp" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
                <Icon name="HardDrive" className="mr-2" size={16} />
                SFTP клиент
              </TabsTrigger>
            </TabsList>

            <TabsContent value="monitor" className="mt-4">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <Card className="bg-secondary-800 border-2 border-secondary-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-secondary-400 flex items-center gap-2">
                      <Icon name="Cpu" className="text-blue-400" size={16} />
                      CPU
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-2">{cpuUsage}%</div>
                    <div className="w-full bg-secondary-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${cpuUsage}%` }}></div>
                    </div>
                    <div className="text-xs text-secondary-400 mt-2">2.4 GHz (4 ядра)</div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary-800 border-2 border-secondary-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-secondary-400 flex items-center gap-2">
                      <Icon name="MemoryStick" className="text-green-400" size={16} />
                      RAM
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-2">{ramUsage}%</div>
                    <div className="w-full bg-secondary-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${ramUsage}%` }}></div>
                    </div>
                    <div className="text-xs text-secondary-400 mt-2">512 MB / 2 GB</div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary-800 border-2 border-secondary-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-secondary-400 flex items-center gap-2">
                      <Icon name="HardDrive" className="text-primary-400" size={16} />
                      Диск
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-2">{diskUsage}%</div>
                    <div className="w-full bg-secondary-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full transition-all" style={{ width: `${diskUsage}%` }}></div>
                    </div>
                    <div className="text-xs text-secondary-400 mt-2">42 GB / 50 GB</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-secondary-800 border-2 border-secondary-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="BarChart3" className="text-primary-500" size={20} />
                    График загрузки (последние 24 часа)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end gap-2">
                    {Array.from({ length: 24 }, (_, i) => {
                      const cpuHeight = Math.random() * 80 + 10;
                      const ramHeight = Math.random() * 60 + 10;
                      const diskHeight = Math.random() * 90 + 10;
                      return (
                        <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                          <div className="w-full space-y-1">
                            <div className="w-full bg-blue-500 rounded-t transition-all hover:bg-blue-400" style={{ height: `${cpuHeight}%` }} title={`CPU: ${Math.round(cpuHeight)}%`}></div>
                            <div className="w-full bg-green-500 transition-all hover:bg-green-400" style={{ height: `${ramHeight}%` }} title={`RAM: ${Math.round(ramHeight)}%`}></div>
                            <div className="w-full bg-primary-500 rounded-b transition-all hover:bg-primary-400" style={{ height: `${diskHeight}%` }} title={`Disk: ${Math.round(diskHeight)}%`}></div>
                          </div>
                          <span className="text-xs text-secondary-500">{i}ч</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center gap-6 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-secondary-400">CPU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span className="text-secondary-400">RAM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-500 rounded"></div>
                      <span className="text-secondary-400">Disk</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="terminal" className="mt-4">
              <Card className="bg-secondary-800 border-2 border-secondary-700">
                <CardHeader className="border-b border-secondary-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-secondary-400 text-sm font-mono ml-4">bash</span>
                    </div>
                    <Button
                      onClick={() => setTerminalHistory([])}
                      variant="ghost"
                      size="sm"
                      className="text-secondary-400 hover:text-white"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px] p-6 font-mono text-sm">
                    <div className="space-y-2">
                      {terminalHistory.map((line, index) => (
                        <div key={index} className={line.includes("$") ? "text-primary-400" : "text-secondary-300 whitespace-pre-line"}>
                          {line}
                        </div>
                      ))}
                      <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
                        <span className="text-primary-500">user@biskvit:{currentPath}$</span>
                        <Input
                          value={currentCommand}
                          onChange={(e) => setCurrentCommand(e.target.value)}
                          className="flex-1 bg-transparent border-none text-secondary-300 focus-visible:ring-0 p-0"
                          placeholder="Введите команду..."
                          autoFocus
                        />
                      </form>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="files" className="mt-4">
              <Card className="bg-secondary-800 border-2 border-secondary-700">
                <CardHeader className="border-b border-secondary-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-secondary-300">
                      <Icon name="Folder" className="text-primary-500" size={20} />
                      <span className="font-mono text-sm">{currentPath}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-secondary-600 text-white hover:bg-secondary-700">
                        <Icon name="Upload" className="mr-2" size={16} />
                        Загрузить
                      </Button>
                      <Button variant="outline" size="sm" className="border-secondary-600 text-white hover:bg-secondary-700">
                        <Icon name="FolderPlus" className="mr-2" size={16} />
                        Новая папка
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-secondary-700">
                    {currentPath !== "/home/user" && (
                      <div
                        onClick={() => setCurrentPath(currentPath.split("/").slice(0, -1).join("/") || "/home/user")}
                        className="flex items-center gap-3 p-4 hover:bg-secondary-700 cursor-pointer transition-colors"
                      >
                        <Icon name="ArrowLeft" className="text-primary-500" size={20} />
                        <span className="text-secondary-300">Назад</span>
                      </div>
                    )}
                    {files.map((file, index) => (
                      <div
                        key={index}
                        onClick={() => handleFileClick(file)}
                        className={`flex items-center justify-between p-4 hover:bg-secondary-700 cursor-pointer transition-colors ${
                          selectedFile === file.name ? "bg-secondary-700" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Icon
                            name={file.type === "folder" ? "Folder" : "FileText"}
                            className={file.type === "folder" ? "text-primary-400" : "text-secondary-500"}
                            size={20}
                          />
                          <div className="flex-1">
                            <div className="text-white font-medium">{file.name}</div>
                            <div className="text-secondary-400 text-xs">{file.modified}</div>
                          </div>
                        </div>
                        {file.size && (
                          <div className="text-secondary-400 text-sm mr-4">{file.size}</div>
                        )}
                        <div className="flex gap-2">
                          <Button 
                            onClick={(e) => {
                              e.stopPropagation();
                              if (file.type === "file") handleViewFile(file.name);
                            }}
                            variant="ghost" 
                            size="sm" 
                            className="text-secondary-400 hover:text-white"
                            title="Просмотр"
                          >
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button 
                            onClick={(e) => {
                              e.stopPropagation();
                              if (file.type === "file") handleEditFile(file.name);
                            }}
                            variant="ghost" 
                            size="sm" 
                            className="text-secondary-400 hover:text-white"
                            title="Редактировать"
                          >
                            <Icon name="Edit" size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-secondary-400 hover:text-white" title="Скачать">
                            <Icon name="Download" size={16} />
                          </Button>
                          <Button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteFile(file.name);
                            }}
                            variant="ghost" 
                            size="sm" 
                            className="text-red-400 hover:text-red-300"
                            title="Удалить"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sftp" className="mt-4">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-secondary-800 border-2 border-secondary-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Icon name="Settings" className="text-primary-500" size={20} />
                      SFTP Подключение
                    </CardTitle>
                    <CardDescription className="text-secondary-400">
                      Настройте параметры SFTP соединения
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-secondary-300 text-sm mb-2 block">Хост</label>
                      <Input
                        value={sftpHost}
                        onChange={(e) => setSftpHost(e.target.value)}
                        className="bg-secondary-900 border-secondary-700 text-white"
                        placeholder="sftp.example.com"
                      />
                    </div>
                    <div>
                      <label className="text-secondary-300 text-sm mb-2 block">Порт</label>
                      <Input
                        value={sftpPort}
                        onChange={(e) => setSftpPort(e.target.value)}
                        className="bg-secondary-900 border-secondary-700 text-white"
                        placeholder="22"
                      />
                    </div>
                    <div>
                      <label className="text-secondary-300 text-sm mb-2 block">Пользователь</label>
                      <Input
                        value={sftpUser}
                        onChange={(e) => setSftpUser(e.target.value)}
                        className="bg-secondary-900 border-secondary-700 text-white"
                        placeholder="username"
                      />
                    </div>
                    <div>
                      <label className="text-secondary-300 text-sm mb-2 block">Пароль</label>
                      <Input
                        type="password"
                        className="bg-secondary-900 border-secondary-700 text-white"
                        placeholder="••••••••"
                      />
                    </div>
                    <Button
                      onClick={handleSftpConnect}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                      disabled={sftpConnected}
                    >
                      {sftpConnected ? (
                        <>
                          <Icon name="Check" className="mr-2" size={16} />
                          Подключено
                        </>
                      ) : (
                        <>
                          <Icon name="Link" className="mr-2" size={16} />
                          Подключиться
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-secondary-800 border-2 border-secondary-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Icon name="Info" className="text-primary-500" size={20} />
                      Информация о подключении
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {sftpConnected ? (
                      <div className="space-y-4">
                        <div className="bg-secondary-900 rounded-lg p-4 border-2 border-primary-500">
                          <div className="flex items-center gap-2 text-primary-400 mb-3">
                            <Icon name="CheckCircle" size={20} />
                            <span className="font-semibold">SFTP соединение активно</span>
                          </div>
                          <div className="space-y-2 text-sm text-secondary-300">
                            <div className="flex justify-between">
                              <span>Сервер:</span>
                              <span className="text-white">{sftpHost}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Порт:</span>
                              <span className="text-white">{sftpPort}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Пользователь:</span>
                              <span className="text-white">{sftpUser}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Протокол:</span>
                              <span className="text-white">SFTP v3</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={() => setSftpConnected(false)}
                          variant="outline"
                          className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                        >
                          <Icon name="X" className="mr-2" size={16} />
                          Отключиться
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Icon name="Cloud" className="text-secondary-600 mx-auto mb-4" size={48} />
                        <p className="text-secondary-400">
                          Заполните параметры подключения и нажмите "Подключиться"
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {sftpConnected && (
                <Card className="bg-secondary-800 border-2 border-secondary-700 mt-6">
                  <CardHeader className="border-b border-secondary-700">
                    <CardTitle className="text-white">Удалённые файлы</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-secondary-700">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 hover:bg-secondary-700 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              name={file.type === "folder" ? "Folder" : "FileText"}
                              className={file.type === "folder" ? "text-primary-400" : "text-secondary-500"}
                              size={20}
                            />
                            <div>
                              <div className="text-white font-medium">{file.name}</div>
                              <div className="text-secondary-400 text-xs">{file.modified}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {file.size && (
                              <div className="text-secondary-400 text-sm">{file.size}</div>
                            )}
                            <Button variant="ghost" size="sm" className="text-secondary-400 hover:text-white">
                              <Icon name="Download" size={16} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={showEditor} onOpenChange={setShowEditor}>
        <DialogContent className="max-w-4xl h-[80vh] bg-secondary-800 border-secondary-700 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="FileCode" className="text-primary-500" size={20} />
              Редактор кода: {editingFile}
            </DialogTitle>
            <DialogDescription className="text-secondary-400">
              Редактируйте файл и нажмите "Сохранить" для применения изменений
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 h-full">
            <Textarea
              value={fileContent}
              onChange={(e) => setFileContent(e.target.value)}
              className="flex-1 font-mono text-sm bg-secondary-900 border-secondary-700 text-secondary-100 resize-none"
              placeholder="Содержимое файла..."
            />
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowEditor(false)} variant="outline" className="border-secondary-600 text-white hover:bg-secondary-700">
                Отмена
              </Button>
              <Button onClick={handleSaveFile} className="bg-primary-500 hover:bg-primary-600 text-white">
                <Icon name="Save" className="mr-2" size={16} />
                Сохранить
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showViewer} onOpenChange={setShowViewer}>
        <DialogContent className="max-w-4xl h-[80vh] bg-secondary-800 border-secondary-700 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="Eye" className="text-primary-500" size={20} />
              Просмотр файла: {viewingFile}
            </DialogTitle>
            <DialogDescription className="text-secondary-400">
              Только для чтения. Используйте кнопку редактирования для изменения файла.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 h-full">
            <ScrollArea className="flex-1 font-mono text-sm bg-secondary-900 border border-secondary-700 rounded-md p-4">
              <pre className="text-secondary-100 whitespace-pre-wrap">{fileContent}</pre>
            </ScrollArea>
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setShowViewer(false)} variant="outline" className="border-secondary-600 text-white hover:bg-secondary-700">
                Закрыть
              </Button>
              <Button 
                onClick={() => {
                  setShowViewer(false);
                  setEditingFile(viewingFile);
                  setShowEditor(true);
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white"
              >
                <Icon name="Edit" className="mr-2" size={16} />
                Редактировать
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Console;