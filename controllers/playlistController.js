const { Playlist } = require("../models/playlistModel");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

exports.addToPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const songId = req.body.id;
  const playlist = await Playlist.findById(playlistId);
  playlist.songs.push(songId);
  await playlist.save();
  res.send(playlist);
};

exports.getPlaylists = async (req, res) => {
  const result = await Playlist.find({});
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate({
    path: "songs",
    populate: { path: "artist" },
  });
  res.send(result);
};

exports.updatePlaylist = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await Playlist.findByIdAndUpdate(id, { title: body.title });
  result.save();
  res.send(result);
};

exports.deletePlaylist = async (req, res) => {
  const id = req.params.id;
  const result = await Playlist.findByIdAndDelete(id);
  res.send(result);
};

